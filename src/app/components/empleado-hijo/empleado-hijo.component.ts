import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit{

  @Input() empleadoDeLista:Empleado
  @Input() index: number

  constructor(){
  }
  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
