import { Component, OnInit } from '@angular/core';
import { AsistentaService } from './asistenta.service';

@Component({
  selector: 'app-asistenta',
  templateUrl: './asistenta.component.html',
  styleUrls: ['./asistenta.component.css']
})
export class AsistentaComponent implements OnInit {

  asistente: any[] = [];  // Lista de asistente

  constructor(private asistentaService: AsistentaService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportAsistente(): void {
    this.asistentaService.getAsistente().subscribe(data => {
      this.asistente = data;
      this.displayAsistente();
    });
  }
    // Afișează medicii în lista
    displayAsistente(): void {
      const asistenteList = document.getElementById('asistenteList');
      if (asistenteList) {
        asistenteList.innerHTML = '';  // Curăță lista existentă
        this.asistente.forEach(asistenta => {
          const li = document.createElement('li');
          li.textContent = `${asistenta.nume} ${asistenta.prenume} - ${asistenta.sectie}`;
          asistenteList.appendChild(li);
        });
      }
    }
}
