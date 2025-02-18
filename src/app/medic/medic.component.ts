import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {
  medici: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  getRaportMedici(): void {
    fetch('http://localhost:8080/raportMedici')
      .then(response => {
        if (!response.ok) {
          throw new Error('Eroare la încărcarea medicilor');
        }
        return response.json();
      })
      .then(medici => {
        this.medici = medici;
        alert(medici);
      })
      .catch(error => {
        console.error('Eroare:', error);
        alert('A apărut o problemă la încărcarea medicilor.');
      });

  }
}
