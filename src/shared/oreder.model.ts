import {Schema} from 'mongoose'

export const OrderSchema = new Schema ({
    region: {type: String, required: true},
    home: {type: String, required: true},
    order: {type: Schema.Types.ObjectId, ref: "Product"}
}) 