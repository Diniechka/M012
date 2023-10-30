import { Component, OnInit } from '@angular/core';
import { Direccion } from '../models/direccion.model';
import { Usuario } from 'src/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  usuarios: Usuario[] = []; // inicializa el array vacío

  constructor() {}

  ngOnInit(): void {
    // asigna los datos al array
    this.usuarios = [
      new Usuario(
        'Juanita',
        'González',
        'juanaG@gmail.com',
        new Direccion('Calle Muntaner', '08018', 'Barcelona', '123456789'),
        new Date('1990-01-01')
      ),
      new Usuario(
        'María',
        'García',
        'mariaG@hotmail.com',
        new Direccion('Carrer Gran de Gràcia', '08002', 'Barcelona', '987654321'),
        new Date('1985-05-15')
      ),
    ];
  }
}
