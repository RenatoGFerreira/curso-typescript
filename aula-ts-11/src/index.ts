import express, {Request, Response, json} from "express";
import { User } from "../protocols/user.protocol";
import { connection } from "../database/database"

const app = express()
app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm OK!")
})

export type CreateUser = Omit<User, "id">


app.post("/users", async (req:Request, res: Response) => {
    const {name, email, password} = req.body as CreateUser

    await connection.query(`
    INSERT INTO Users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);

    res.sendStatus(201)
})

app.get("/users", async (req:Request, res: Response) => {
    const result = await connection.query(`SELECT * FROM users`)
    const users = result.rows
    res.send(users)
})


app.listen(5000, () =>{
    console.log("Server  is running on port 5000")
})