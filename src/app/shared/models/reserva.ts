import { CampoFutbol } from "./campoFutbol";

export interface Reserva {
    id:          number;
    fecha:       string;
    horaInicio:  string;
    horaFin:     string;
    dniCliente:  number;
    campoFutbol: number;
    campoFutbols?: CampoFutbol[];
}
