import { Schema, model } from "mongoose";
export const esquema3 = new Schema({
    nombre:{
        type: String
    },
    rango:{
        type: String
    }
})
export const modelo5 = new model('Lideres', esquema3)