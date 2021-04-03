import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private now = new Date()
  public hour: number = this.now.getHours()
  public minute: number = this.now.getMinutes()
  public seconds: number = this.now.getSeconds()
  public weekDay = this.now.getDay()
  public day = this.now.getDate()
  public month = this.now.getMonth()
  constructor(public service: ServicioService) { }

  ngOnInit(): void {
  }

  // public getHour(){
  //   let now = new Date()
  //   this.hour = now.getHours()
  //   this.minute = now.getMinutes()
  //   this.seconds = now.getSeconds()
  //   return this.hour + ":" + this.minute + ":" + this.seconds
  // }

  public getDay(){
    let weekD = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    let monthM = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    return weekD[this.weekDay-1] +", " + this.day +" de " +monthM[this.month]
  }

  public ocultar(){
    this.service.mostrar = !this.service.mostrar
  }
}
