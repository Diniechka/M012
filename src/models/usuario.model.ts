import { Direccion } from './direccion.model';
export class Usuario {
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: Date;
  direccion: Direccion;


  constructor(nombre: string, apellido: string, email: string, direccion: Direccion, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
  }
}
