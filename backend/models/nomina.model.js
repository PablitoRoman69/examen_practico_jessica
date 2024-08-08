import { Schema, model } from "mongoose";
export const esquema4 = new Schema({
    nombre:{
        type: String
    },
    sueldo:{
        type: Number
    }
})
export const modelo6 = new model('Nomina', esquema4)