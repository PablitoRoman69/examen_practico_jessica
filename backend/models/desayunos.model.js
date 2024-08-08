import { Schema, model } from "mongoose";
export const esquema5 = new Schema({
    nombre:{
        type: String
    },
    puesto:{
        type: String
    }
})
export const modelo7 = new model('Desayunos', esquema5)