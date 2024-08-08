import { mongoose } from "mongoose";
import { cors } from "cors";
import { express } from "express";
import { dotenv } from "dotenv";
import { testempleados } from "../backend/controllers/empleados.controler.js";
import { testlideres } from "../backend/controllers/lideres.controller.js";
import { testentrenadores } from "../backend/controllers/entrenadores.controller.js";
import { testtecnicos } from "../backend/controllers/tecnicos.controller.js";
import { testbecarios } from "../backend/controllers/becarios.controller.js";
import { testnomina } from "../backend/controllers/nomina.controller.js";
import { testcomidas } from "../backend/controllers/comidas.controller.js";
import { testdesayunos } from "../backend/controllers/desayunois.controller.js";

dotenv.config();
mongoose.connect(process.env.Base)
.then(()=>{
    console.log('Si me funciona')
})
.catch((error)=>{
    console.log('No me funciona')
})

const app =express();
app.use (cors());

app.listen(4000, ()=>{
    console.log('si funciona el servidor')
})

testbecarios()
testcomidas()
testdesayunos()
testempleados()
testentrenadores()
testlideres()
testnomina()
testnomina()