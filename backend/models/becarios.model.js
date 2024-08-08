import { esquema1 } from "./empleados.model.js";
import { model } from "mongoose";

export const modelo2 = new model('Becarios', esquema1)
