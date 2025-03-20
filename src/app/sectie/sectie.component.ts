import { Component, OnInit } from '@angular/core';
import { SectieService } from './sectie.service';

@Component({
  selector: 'app-sectie',
  templateUrl: './sectie.component.html',
  styleUrls: ['./sectie.component.css']
})
export class SectieComponent implements OnInit {

  sectii: any[] = [];  // Lista de medisectiici

  constructor(private sectieService: SectieService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportSectii(): void {
    this.sectieService.getSectii().subscribe(data => {
      this.sectii = data;
      this.displaySectii();
    });
  }

  // Afișează medicii în lista
  displaySectii(): void {
    const sectiiList = document.getElementById('sectiiList');
    if (sectiiList) {
      sectiiList.innerHTML = '';  // Curăță lista existentă
      this.sectii.forEach(sectie => {
        const li = document.createElement('li');
        li.textContent = ` Denumire sectie: ${sectie.denumire}`;
        sectiiList.appendChild(li);
      });
    }
  }
}
