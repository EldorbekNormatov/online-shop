import {Schema} from 'mongoose'

export const ProductSchem = new Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: String, default: '0' }, 
    description: { type: String, required: true },
    sellerId: {type: Schema.Types.ObjectId, ref: "SellerAuth"},
    catogrID: {type: Schema.Types.ObjectId, ref: "Category"},
    basket: {type: Schema.Types.ObjectId, ref: "Basket"},
    liked: {type: Schema.Types.ObjectId, ref: "Liked"},
    order: {type: Schema.Types.ObjectId, ref: "Order"},
}) 