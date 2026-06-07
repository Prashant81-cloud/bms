import express from 'express'
import { prismaClient } from "@repo/db";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hi there welcome to PRODUCTION")
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prismaClient.user.create({
        data: {
            username: `Production ${username}`,
            password: `Production ${password}`
        }
    })

    res.json({
        message: "Signup successful",
        id: user.id
    });
})

app.listen(3002);