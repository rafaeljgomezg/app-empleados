import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-empleados';
  titulo="Listado de Empleados"

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Rafael","Gomez","Gerente",8500),
    new Empleado("Janeth","Rosales","Administradora",9500),
    new Empleado("Laura","Lopez","Jefa",3500)

  ]

cuadroNombre:String=""
cuadroApellido:String=""
cuadroCargo:String=""
cuadroSalario:Number=0

agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
  this.empleados.push(miEmpleado)
  $("#myForm").trigger("reset");

}

}
