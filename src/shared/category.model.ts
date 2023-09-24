import {Schema} from 'mongoose'

export const CategorySchema = new Schema ({
    categoryName: { type: String, required: true },
    productID: {type: Schema.Types.ObjectId, ref: "Product"}
}) 