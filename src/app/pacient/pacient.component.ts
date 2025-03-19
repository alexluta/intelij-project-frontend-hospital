import { Component, OnInit } from '@angular/core';
import { PacientService } from './pacient.service';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  pacienti: any[] = [];  // Lista de pacienti

  constructor(private pacientService: PacientService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportPacienti(): void {
    this.pacientService.getPacienti().subscribe(data => {
      this.pacienti = data;
      this.displayPacienti();
    });
  }

  // Afișează medicii în lista
  displayPacienti(): void {
    const pacientiList = document.getElementById('pacientiList');
    if (pacientiList) {
      pacientiList.innerHTML = '';  // Curăță lista existentă
      this.pacienti.forEach(pacient => {
        const li = document.createElement('li');
        li.textContent = `${pacient.nume} ${pacient.prenume} - diagnostic: ${pacient.diagnostic}`;
        pacientiList.appendChild(li);
      });
    }
  }
}
