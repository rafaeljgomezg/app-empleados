import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit{
  

  @Output() caracterisitasEmpleados = new EventEmitter<string>()

  ngOnInit(): void {
    
  }
  constructor(){

  }

  agregaCaracteristicas(value:string){
    this.caracterisitasEmpleados.emit(value)
  }

}
