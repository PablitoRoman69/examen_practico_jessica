import { modelo1 } from "../models/empleados.model.js";
 export const testempleados =() =>{
    console.log('Si nos funciona empleados')
 }

 modelo1.create({
    nombre:"Pablo",
    edad: 21
 })