(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var o=s(1),n=s(21),a=s.n(n),r=(s(28),s(2)),i=s(3),c=s(7),u=s(6),l=s(4),h=s(11),m=s(12),d=function(){function e(t,s){Object(r.a)(this,e);var o=window.location.origin.replace(/^http/,"ws");this.cs=new WebSocket("".concat(o,"ws?user=").concat(t,"&userColour=").concat(s))}return Object(i.a)(e,[{key:"connect",value:function(e){console.log("Attempting Connection..."),this.cs.onopen=function(){console.log("Successfully Connected")},this.cs.onmessage=function(t){e(t)},this.cs.onclose=function(t){console.log("Socket Closed Connection: ",t),e(t)},this.cs.onerror=function(e){console.log("Socket Error: ",e)}}},{key:"sendMessage",value:function(e,t){""!==t&&this.cs.send(JSON.stringify({action:"send-message",message:t,roomid:e.ID,room:e.name}))}},{key:"createSocket",value:function(){console.log("WS open!")}},{key:"closeSocket",value:function(){null!=this.cs&&(this.cs.close(),this.cs=null)}},{key:"joinRoom",value:function(e){this.cs.send(JSON.stringify({action:"join-room",message:e}))}},{key:"leaveRoom",value:function(e){this.cs.send(JSON.stringify({action:"leave-room",message:e}));for(var t=0;t<this.rooms.length;t++)if(this.rooms[t].ID===e){this.rooms.splice(t,1);break}}},{key:"joinPrivateRoom",value:function(e){this.cs.send(JSON.stringify({action:"join-room-private",message:e}))}}]),e}(),j=(s(29),s(30),s(0)),p=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var o;Object(r.a)(this,s);var n=(o=t.call(this,e)).props.message;return o.state={message:n,timeStamp:o.displayTime(n.timeStamp)},o}return Object(i.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Message",children:[Object(j.jsx)("span",{className:"timeStamp",children:this.state.timeStamp}),Object(j.jsxs)("span",{className:"userName",style:{color:"#"+this.state.message.color},children:[this.state.message.user,"\xa0"]}),Object(j.jsx)("span",{className:"messageBody",children:this.state.message.msg})]})}},{key:"displayTime",value:function(e){var t=new Date(e).toLocaleString();return this.forceUpdate(),"".concat(t.substr(11,5),"\xa0").concat(t.substr(t.length-2,t.length))}}]),s}(o.Component),f=(s(32),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.scrollToBottom(),this.forceUpdate()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.el.scrollIntoView({behvaior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.props.chatHistory&&this.props.chatHistory.map((function(e,t){return Object(j.jsx)(p,{message:e},t)}));return Object(j.jsx)("div",{className:"ChatHistory",children:Object(j.jsxs)("div",{id:"chatHistory",className:"disable-scrollbars",children:[Object(j.jsx)("div",{id:"history",children:t}),Object(j.jsx)("div",{ref:function(t){e.el=t}})]})})}}]),s}(o.Component)),b=(s(33),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e;return e=this.props.roomName.length>0?Object(j.jsx)("input",{onKeyDown:this.props.send,placeholder:"Message "+this.props.roomName}):Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"ChatInput",children:e})}}]),s}(o.Component)),v=(s(34),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e,t=this;return e=this.props.userList.length>0?Object(j.jsxs)("p",{className:"usersLabel",children:[" ","Users:"]}):Object(j.jsxs)("p",{className:"usersLabel",children:[" ",""]}),Object(j.jsx)("div",{className:"UserList",children:Object(j.jsxs)("div",{className:"user-list",children:[e,this.props.userList&&this.props.userList.map((function(e,s){return Object(j.jsx)("p",{className:"user",style:{color:"#"+e.color},onClick:function(){return t.props.privateMessage(e.id)},children:e.name},s)}))]})})}}]),s}(o.Component)),g=new(function(){function e(){Object(r.a)(this,e),this.sessionStorageUser="ChatUser"}return Object(i.a)(e,[{key:"login",value:function(e,t,s){"#"===t.charAt(0)&&(t=t.replace("#","")),sessionStorage.setItem(this.sessionStorageUser,JSON.stringify({_name:e,_colour:t})),s()}},{key:"logout",value:function(e){sessionStorage.removeItem(this.sessionStorageUser),e()}},{key:"isAuthenticated",value:function(){return sessionStorage.getItem(this.sessionStorageUser)}},{key:"getUserName",value:function(){return JSON.parse(sessionStorage.getItem(this.sessionStorageUser))._name}},{key:"getUserColour",value:function(){return JSON.parse(sessionStorage.getItem(this.sessionStorageUser))._colour}}]),e}()),O=(s(35),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"handleLogout",value:function(){var e=this;g.logout((function(){return e.props.history.push("/")}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("input",{placeholder:"Join room",onKeyDown:this.props.roomName}),Object(j.jsx)("h2",{children:this.props.currentRoom||"Chat App"}),Object(j.jsx)("button",{className:"logout-button",onClick:function(){e.handleLogout()},children:"Logout"})]})}}]),s}(o.Component)),y=Object(l.g)(O),k=(s(41),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"Servers",children:Object(j.jsx)("div",{className:"server-list",children:this.props.rooms&&this.props.rooms.map((function(t,s){return Object(j.jsx)("button",{className:"ServerIcons",value:t.ID,onClick:function(){return e.props.changeRoom(t.ID)},children:t.name.split(" ").map((function(e){return e[0]})).join("").toUpperCase()},s)}))})})}}]),s}(o.Component)),x=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var o;return Object(r.a)(this,s),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(m.a)({},e.target.name,e.target.value))},o.handleShow=function(){o.setState({isActive:!0})},o.handleHide=function(){o.setState({isActive:!1})},o.changeRoom=function(e){o.setState({room:o.state.rooms[e]})},o.privateMessage=function(e){o._chatSocket.joinPrivateRoom(e),console.log(e)},o.state={isActive:!1,chatHistory:[],userList:[],rooms:{},room:{name:"",ID:"",messages:[],users:[]}},o}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;g.isAuthenticated()&&(this._chatSocket=new d(g.getUserName(),g.getUserColour()),this._chatSocket.connect((function(t){e.handleSocketEvent(t)})))}},{key:"handleSocketEvent",value:function(e){switch(e.type){case"close":this.handleLogout();break;case"message":this.handleNewMessage(e)}}},{key:"handleNewMessage",value:function(e){var t=e.data;t=t.split(/\r?\n/);for(var s=0;s<t.length;s++){var o=JSON.parse(t[s]);switch(console.log("handlenewmessage"),console.log(o),o.action){case"send-message":this.handleChatMessage(o);break;case"user-join":this.handleUserJoined(o);break;case"user-left":this.handleUserLeft(o);break;case"room-joined":this.handleRoomJoined(o);break;case"user-join-room":case"list-clients":this.handleUserJoinedRoom(o)}this.updateState()}}},{key:"handleUserJoinedRoom",value:function(e){var t={name:e.user,id:e.id,color:e.color};this.state.rooms[e.roomid].users.push(t),this.sortUsersinRoom(e.roomid)}},{key:"handleChatMessage",value:function(e){if("undefined"!==typeof this.state.rooms[e.roomid]){var t={msg:e.message,user:e.user,color:e.color,timeStamp:e.timestamp};this.state.rooms[e.roomid].messages.push(t)}}},{key:"handleUserJoined",value:function(e){var t={name:e.user,id:e.id,color:e.color};this.state.userList.push(t)}},{key:"handleRoomJoined",value:function(e){var t={name:e.user,id:e.id,color:e.color};if("undefined"===typeof this.state.rooms[e.roomid]){var s={name:e.room,ID:e.roomid,messages:[],users:[t]};this.setState(Object(h.a)(Object(h.a)({},this.state),{},{rooms:Object(h.a)(Object(h.a)({},this.state.rooms),{},Object(m.a)({},e.roomid,s))}))}else this.state.rooms[e.roomid].users.push(t);this.sortUsersinRoom(e.roomid)}},{key:"sortUsersinRoom",value:function(e){this.state.rooms[e].users.length>0&&this.state.rooms[e].users.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},{key:"handleUserLeft",value:function(e){for(var t=0;t<this.state.rooms[e.roomid].users.length;t++)this.state.rooms[e.roomid].users[t].id===e.id&&this.state.rooms[e.roomid].users.splice(t,1)}},{key:"componentWillUnmount",value:function(){this._chatSocket.closeSocket()}},{key:"handleLogout",value:function(){var e=this;g.logout((function(){e.props.history.push("/")}))}},{key:"send",value:function(e,t){13===e.keyCode&&""!==e.target.value&&(this._chatSocket.sendMessage(t,e.target.value),console.log(e.target.value,t),e.target.value="")}},{key:"findRoom",value:function(e){13===e.keyCode&&""!==e.target.value&&(this._chatSocket.joinRoom(e.target.value),this._chatSocket.roomInput=e.target.value,e.target.value="")}},{key:"updateState",value:function(){this.setState({rooms:this.state.rooms})}},{key:"render",value:function(){var e=this;return g.isAuthenticated?Object(j.jsxs)("div",{className:"ChatPage",children:[Object(j.jsx)(y,{roomName:function(t){return e.findRoom(t)},currentRoom:this.state.room.name}),Object(j.jsxs)("div",{className:"chatBody",children:[Object(j.jsx)("div",{className:"serverList",children:Object(j.jsx)(k,{rooms:Object.values(this.state.rooms),changeRoom:this.changeRoom})}),Object(j.jsxs)("div",{className:"roomPage",children:[Object(j.jsx)(f,{chatHistory:this.state.room.messages}),Object(j.jsx)(b,{send:function(t){return e.send(t,e.state.room)},roomName:this.state.room.name})]}),Object(j.jsx)("div",{className:"usersList",children:Object(j.jsx)(v,{userList:this.state.room.users,privateMessage:this.privateMessage})})]})]}):Object(j.jsx)(l.a,{to:"/"})}}]),s}(o.Component),S=(s(42),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(e){var o;return Object(r.a)(this,s),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(m.a)({},e.target.name,e.target.value))},o.submitLogin=function(){g.login(o.state.name,o.state.colour,(function(){o.props.history.push("/chat")}))},o.verifyInput=function(){""!==o.state.name&&o.submitLogin()},o.keyPressed=function(e){"Enter"===e.key&&o.verifyInput()},o.state={name:"",colour:"",continue:!0},o}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"LoginPage",children:Object(j.jsxs)("div",{className:"loginContainer",onKeyPress:this.keyPressed,children:[Object(j.jsxs)("div",{className:"form__group field",children:[Object(j.jsx)("input",{type:"input",className:"form__field",name:"name",id:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(j.jsx)("label",{htmlFor:"name",className:"form__label",children:"Username"})]}),Object(j.jsxs)("div",{className:"form__group field",children:[Object(j.jsx)("input",{type:"input",className:"form__field",name:"colour",id:"colour",value:this.state.color,onChange:function(t){return e.handleChange(t)}}),Object(j.jsxs)("label",{htmlFor:"colour",className:"form__label",children:[" Name Colour  ",Object(j.jsx)("span",{style:{color:"#E92750"},children:"default: Red(E92750) "}),"  "]})]}),Object(j.jsx)("button",{className:"login-button",onKeyPress:this.onKeyPress,onClick:this.verifyInput,children:"Login"})]})})}}]),s}(o.Component)),N=s(23),C=["component"],U=function(e){var t=e.component,s=Object(N.a)(e,C);return Object(j.jsx)(l.b,Object(h.a)(Object(h.a)({},s),{},{render:function(e){return g.isAuthenticated()?Object(j.jsx)(t,Object(h.a)({},e)):Object(j.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},w=(s(43),function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l.b,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",component:S}),Object(j.jsx)(U,{exact:!0,path:"/chat",component:x}),Object(j.jsx)(l.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})})})}}]),s}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=s(14);a.a.render(Object(j.jsx)(L.a,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b18f7c13.chunk.js.map