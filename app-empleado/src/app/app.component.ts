import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de vagabundos';

  empleados:Empleado[] = [

    new Empleado("Miguel", "Vagabungos", 0),
    new Empleado("Miguel", "Nada", 1),
    new Empleado("Miguel", "Tampoco es nada", 2)

  ];
}
