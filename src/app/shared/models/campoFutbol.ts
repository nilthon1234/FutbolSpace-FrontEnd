import { FileImagen } from "./file-imagen";

export interface CampoFutbol {
    id:          number;
    dniUse:      number;
    address:     string;
    description: string;
    city:        string;
    province:    string;
    district:    string;
    estado:      string;
    fileImagen?: FileImagen[],
}
