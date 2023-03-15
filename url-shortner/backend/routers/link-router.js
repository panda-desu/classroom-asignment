import express from "express"
import { shorten } from "../service/link-service.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.json("hello link router")
})

router.post("/", async (req, res) => {
    const { url } = req.body
    res.json(await shorten(url))
})

export default router;