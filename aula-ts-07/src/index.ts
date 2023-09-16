import express, {Request, Response} from "express"

const app = express()

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK")
})


app.listen(5000, ()=>{
    console.log("Server is up and running")
})