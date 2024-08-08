import { modelo2 } from "../models/becarios.model.js";

export const testbecarios =() =>{
    console.log('si funiona becarios')
}
modelo2.create({
     nombre: "Jessica",
     edad: 24
})