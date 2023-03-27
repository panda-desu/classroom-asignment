import express from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from "../services/users.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json(await getUsers());
    } catch (e) {
        console.log(e)
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        res.json(await getUserById(id));
    } catch (e) {
        console.log(e)
    }
});

router.post("/", async (req, res) => {
    try {
        const user = req.body;
        res.json(await createUser(user));
    } catch (e) {
        console.log(e)
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params.id;
        const user = req.body;
        res.json(await updateUser(id, user));
    } catch (e) {
        console.log(e)
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        res.json(await deleteUser(id, user));
    } catch (e) {
        console.log(e)
    }
});

export default router;