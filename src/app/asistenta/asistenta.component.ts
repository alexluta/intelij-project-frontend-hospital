import { Component } from '@angular/core';

@Component({
  selector: 'app-asistenta',
  imports: [],
  templateUrl: './asistenta.component.html',
  styleUrl: './asistenta.component.css'
})
export class AsistentaComponent {
  onClickRaport() {
    console.log('Buton apăsat!');
    // Poți adăuga logica necesară pentru gestionarea raportului
  }
}
