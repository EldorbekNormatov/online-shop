import {Schema} from 'mongoose'

export const AdminSchema = new Schema ({
    login: { type: String, required: true },
    password: { type: String, required: true },
    isMain: { type: Boolean, default: false, required: true },
    
}) 