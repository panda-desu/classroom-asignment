import pool from "../config/mysql-config.js"
import { nanoid } from "nanoid"
import slugify from 'slugify';

export const getCategories = async () => {
    const [result] = await pool.query("SELECT * FROM category")
    return result
}

export const getOneCategory = async (id) => {
    try {
        const [result] = await pool.query(
            `select * from category where categoryId=?`, [id]
        )
        const category = result.length ? result[0] : null
        return category
    } catch (e) {
        console.error(e)
        return null
    }
}


export const deleteCategory = async (id) => {
    try {
        await pool.query(`DELETE FROM category WHERE categoryId=?`, [id]);
        return id
    } catch (e) {
        console.log(e)
        return null
    }
}

export const createCategory = async (category) => {
    const id = nanoid();
    try {
        const res = await pool.query(
            `INSERT INTO category (categoryId,name, slug, createdAt, parent_id)
             VALUES(?,?,?,?,?);`,
            [
                id,
                category.name,
                slugify(category.name),
                new Date(),
                category.parent_id,

            ]
        );
        console.log(res);
        const result = await getOneCategory(id)
        return result;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const updateCategory = async (category) => {
    try {
        await pool.query(
            `UPDATE category SET name=?, slug=?, productCount=?, 
            parent_id ,updated=? updatedAt=?,  WHERE categoryId=?`,
            [
                category.name,
                slugify(category.slug),
                category.productCount,
                category.parent_id,
                category.updated,
                new Date(),
                category.id
            ]

        )
        const result = await getOneCategory(category.id);
        return result
    } catch (e) {
        console.error(e)
        return null
    }
}