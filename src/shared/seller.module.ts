import {Schema} from 'mongoose'

export const SellerSchema = new Schema ({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true }, 
    legalName: { type: String, required: true },
    product: {type: Schema.Types.ObjectId, ref: "Product"}

})  