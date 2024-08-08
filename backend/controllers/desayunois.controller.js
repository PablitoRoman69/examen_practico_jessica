import { modelo7 } from "../models/desayunos.model.js"
 export const testdesayunos =() =>{
    console.log('Si nos funciona desayunos')
 }

 modelo7.create({
    nombre:"Pablo",
    puesto: "GERENTE"
 })