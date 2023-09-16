import express, {Request, Response} from "express"
import [ User ] from "./protocols/user-protocol"

const app = express()

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK")
})

app.post("/users", (req:Request, res: Response) => {
    const body = req.body as User
    body.name //exemple
})
app.listen(5000, ()=>{
    console.log("Server is up and running")
})


const user: User ={
    name: "name",
    email: "email",
    password: "password"
}