import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    const res = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    })
console.log(res)
    socket.send("Hi there you are connected to the server");
})