import {Schema} from 'mongoose'

export const BasketSchema = new Schema ({
    product: {type: Schema.Types.ObjectId, ref: "Product"}
}) 