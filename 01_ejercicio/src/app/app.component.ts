import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01_ejercicio';

  edadUno?: number | null;
  edadDos?: number | null;
  suma = 0;
  promedio = 0;
  mensaje = '';

  calcular() {
    if (this.edadUno && this.edadDos) {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma / 2;
      this.mensaje = `La suma es: ${this.suma}. Y el promedio es: ${this.promedio}`;
    } else {
      this.mensaje = 'Por favor ingresar valores numericos en ambos inputs';
    }
  }

  borrarContenido() {
    this.edadUno = null;
    this.edadDos = null;
    this.mensaje = '';
  }
}
