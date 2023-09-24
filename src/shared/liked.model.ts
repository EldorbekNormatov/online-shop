import {Schema} from 'mongoose'

export const LikedSchema = new Schema ({
    product: {type: Schema.Types.ObjectId, ref: "Product"}
}) 