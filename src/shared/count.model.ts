import {Schema} from 'mongoose'

export const CountSchema = new Schema ({
    totalPrise: { type: String, default: 0, required: true },
    productAmount: { type: String, default: 0, required: true },
}) 