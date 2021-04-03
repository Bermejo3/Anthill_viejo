import { Component } from '@angular/core';
import { ServicioService } from './shared/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaAB';

  constructor(public service: ServicioService){ }
}
