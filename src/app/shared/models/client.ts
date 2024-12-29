import { Reserva } from "./reserva";

export interface Client {
    id:       string;
    name:     string;
    lastname: string;
    dni:      number;
    phone:    number;
    email:    string;
    password: string;
    reservas?: Reserva[];


}

