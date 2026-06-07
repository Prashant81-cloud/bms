import express from 'express'
import { prismaClient } from "@repo/db";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hi there")
})

app.post("/signup", async (req, res) => {
    const username:string = req.body.username;
    const password:string = req.body.password;

    const user = await prismaClient.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.json({
        message: "Signup successful",
        id: user.id
    });
})

app.listen(3002);