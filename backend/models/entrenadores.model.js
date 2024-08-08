import { Schema, model } from "mongoose";

export const esquema2 = new Schema({
    nombre:{
        type: String
    },
    profesion:{
        type: String
    }
})
export const modelo3 = new model ('Entrenadores', esquema2)