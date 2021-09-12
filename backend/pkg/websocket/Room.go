package websocket

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/Jasminebg/GoLang-Webchat/backend/pkg/config"
	"github.com/google/uuid"
)

var ctx = context.Background()

const welcomeMessage = "%s joined the room"

type Room struct {
	ID         uuid.UUID `json:"id"`
	Name       string
	clients    map[*Client]bool
	register   chan *Client
	unregister chan *Client
	broadcast  chan *Message
	Private    bool `json:"private"`
}

func NewRoom(name string, private bool) *Room {
	return &Room{
		ID:         uuid.New(),
		Name:       name,
		clients:    make(map[*Client]bool),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		broadcast:  make(chan *Message),
		Private:    private,
	}

}

func (room *Room) RunRoom() {
	go room.subscribeToRoomMessages()
	for {
		select {

		case client := <-room.register:
			room.registerClientInRoom(client)

		case client := <-room.unregister:
			room.unregisterClientInRoom(client)

		case message := <-room.broadcast:
			// message.Timestamp = time.Now().Format(time.RFC822)
			room.publishRoomMessage(message.encode())

		}

	}

}

func (room *Room) registerClientInRoom(client *Client) {
	if !room.Private {
		room.notifyClientJoined(client)

	} else {

		message := &Message{
			Action:   userJoinedRoom,
			User:     client.GetName(),
			Color:    client.GetColor(),
			Uid:      client.GetId(),
			TargetId: room.ID.String(),
		}
		// log.Println("register client")
		// log.Println(message)
		room.publishRoomMessage(message.encode())
	}
	room.clients[client] = true
	room.listClientsinRoom(client)

}
func (room *Room) unregisterClientInRoom(client *Client) {
	if _, ok := room.clients[client]; ok {
		delete(room.clients, client)
	}

}

func (room *Room) publishRoomMessage(message []byte) {
	err := config.Redis.Publish(ctx, room.GetName(), message).Err()
	// log.Println("room publish")
	// log.Println(message)

	if err != nil {
		log.Println(err)
		log.Println(message)
		log.Println("publish ")
	}
}
func (room *Room) subscribeToRoomMessages() {
	pubsub := config.Redis.Subscribe(ctx, room.GetName())

	ch := pubsub.Channel()
	log.Println(ch)
	for msg := range ch {
		room.broadcastToClientsInRoom([]byte(msg.Payload))
	}

}

func (room *Room) broadcastToClientsInRoom(message []byte) {
	for client := range room.clients {
		client.send <- message
	}
}

func (room *Room) listClientsinRoom(client *Client) {
	for otherclient := range room.clients {
		if otherclient.GetId() != client.GetId() {
			message := &Message{
				Action:   userJoinedRoom,
				User:     otherclient.GetName(),
				Color:    otherclient.GetColor(),
				Uid:      otherclient.GetId(),
				TargetId: room.ID.String(),
			}
			// log.Println("list clients")
			// log.Println(message)
			client.send <- message.encode()

		}
	}
}
func (room *Room) notifyClientJoined(sender *Client) {
	message := &Message{
		Message:   fmt.Sprintf(welcomeMessage, sender.GetName()),
		Action:    SendMessage,
		Target:    room.Name,
		TargetId:  room.ID.String(),
		Timestamp: time.Now().Format(time.RFC822),
	}
	// log.Println("client joined")
	// log.Println(message)
	room.publishRoomMessage(message.encode())

	joinMessage := &Message{
		Action:   userJoinedRoom,
		User:     sender.GetName(),
		Color:    sender.GetColor(),
		Uid:      sender.GetId(),
		Target:   room.Name,
		TargetId: room.ID.String(),
	}
	// log.Println("userjoined message")
	// log.Println(joinMessage)
	room.publishRoomMessage(joinMessage.encode())

}

func (room *Room) GetId() string {
	return room.ID.String()
}

func (room *Room) GetName() string {
	return room.Name
}

func (room *Room) GetPrivate() bool {
	return room.Private
}
