import mongoose from "mongoose";

export const product = {
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },

    price: {
        type: Int,


    }
}