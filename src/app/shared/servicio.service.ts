import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public mostrar: boolean
  constructor() {
    this.mostrar = true
   }
}
