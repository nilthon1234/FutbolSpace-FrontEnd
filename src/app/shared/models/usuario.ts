import { CampoFutbol } from "./campoFutbol";
import { FileImagen } from "./file-imagen";

export interface Usuario {
    id:       number;
    name:     string;
    lastname: string;
    email:    string;
    password: string;
    dni:      number;
    phone:    number;
    estado?:   string;
    campoFutbol?: CampoFutbol[];
}
