import express from "express";
import linkRouter from "./routers/link-router.js"
import { findOneById } from "./service/link-service.js";

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json("hello world")
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const result = findOneById(id)
    if (result === null) res.status(400).json("Url not found");
    else res.json(result)
})

app.use("/links", linkRouter)

app.listen(8000, () => {
    console.log("http://localhost:8000")
})