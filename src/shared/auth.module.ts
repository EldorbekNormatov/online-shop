import {Schema} from 'mongoose'

export const AuthSchema = new Schema ({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true }, 
    gender: { type: String, required: true },
}) 