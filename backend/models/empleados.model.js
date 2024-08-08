import { Schema,model } from mongoose;
export const esquema1 = new Schema({
    nombre:{
        type: String
    },
    edad:{
        type: Number
    }
})
export const modelo1 = new model ('Empleados', esquema1)