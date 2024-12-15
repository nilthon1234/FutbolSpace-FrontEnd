import { FileImagen } from "./file-imagen";
import { Reserva } from "./reserva";

export interface CampoFutbol {
    id:          number;
    dniUse:      number;
    address:     string;
    description: string;
    city:        string;
    province:    string;
    district:    string;
    estado:      string;
    reservas?: Reserva[],
    fileImagen?: FileImagen[],
}
