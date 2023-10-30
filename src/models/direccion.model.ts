// direccion.model.ts
export class Direccion {
  calle: string;
  cp: string;
  ciudad: string;
  telefono: string;

  constructor(calle: string, cp: string, ciudad: string, telefono: string) {
    this.calle = calle;
    this.cp = cp;
    this.ciudad = ciudad;
    this.telefono = telefono;
  }
}
