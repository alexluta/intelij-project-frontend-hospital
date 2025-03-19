import { Component, OnInit } from '@angular/core';
import { MedicService } from './medic.service';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {

  medici: any[] = [];  // Lista de medici

  constructor(private medicService: MedicService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportMedici(): void {
    this.medicService.getMedici().subscribe(data => {
      this.medici = data;
      this.displayMedici();
    });
  }

  // Afișează medicii în lista
  displayMedici(): void {
    const mediciList = document.getElementById('mediciList');
    if (mediciList) {
      mediciList.innerHTML = '';  // Curăță lista existentă
      this.medici.forEach(medic => {
        const li = document.createElement('li');
        li.textContent = `${medic.nume} ${medic.prenume} - Sectia: ${medic.specializare}`;
        mediciList.appendChild(li);
      });
    }
  }
}
