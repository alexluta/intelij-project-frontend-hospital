import { Component, OnInit } from '@angular/core';
import { SalonService } from './salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  saloane: any[] = [];  // Lista de medici

  constructor(private salonService: SalonService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportSaloane(): void {
    this.salonService.getSaloane().subscribe(data => {
      this.saloane = data;
      this.displaySaloane();
    });
  }

  // Afișează medicii în lista
  displaySaloane(): void {
    const saloaneList = document.getElementById('saloaneList');
    if (saloaneList) {
      saloaneList.innerHTML = '';  // Curăță lista existentă
      this.saloane.forEach(salon => {
        const li = document.createElement('li');
        li.textContent = `Salon Nr. ${salon.numarSalon} - ${salon.denumireSectie} - Capacitate: ${salon.capacitateSalon} locuri`;
        saloaneList.appendChild(li);
      });
    }
  }
}
