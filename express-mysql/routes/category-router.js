import express from "express";
import {
    createCategory,
    deleteCategory,
    getCategories,
    getOneCategory,
    updateCategory
} from "../services/category-service.js";

const router = express.Router()


router.get("/", async (req, res) => {
    res.json(await getCategories())
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    res.json(await getOneCategory(id))
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    res.json(await deleteCategory(id))
})

router.post('/', async (req, res) => {
    const { name, slug, productCount, createdAt, parent_id, updated }
        = req.body
    res.json(
        await createCategory({
            name,
            slug,
            productCount,
            createdAt,
            parent_id,
            updated
        }))
})


router.patch('/:id', async (req, res) => {
    const {
        name,
        slug,
        productCount,
        parent_id,
        updated } = req.body
    const { id } = req.params
    res.json(
        await updateCategory({
            name,
            slug,
            productCount,
            parent_id,
            updated,
            id
        })
    )
})

export default router;