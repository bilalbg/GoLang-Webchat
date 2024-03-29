
FROM golang:alpine as builder
RUN apk update && apk add --no-cache git
RUN mkdir /build 
ADD . /build/
WORKDIR /build/backend
RUN go get -d -v
RUN go build -o backend .
# Stage 2
FROM alpine
RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/backend/ /app/
WORKDIR /app
CMD ["./backend"]