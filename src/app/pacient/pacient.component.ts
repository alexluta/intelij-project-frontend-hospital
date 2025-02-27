import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {
  pacienti: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  getRaportPacienti(): void {
    fetch('http://localhost:8080/raportPacienti')
      .then(response => {
        if (!response.ok) {
          throw new Error('Eroare la încărcarea pacientilor');
        }
        return response.json();
      })
      .then(pacienti => {
        this.pacienti = pacienti;
        alert(pacienti);
      })
      .catch(error => {
        console.error('Eroare:', error);
        alert('A apărut o problemă la încărcarea pacientilor.');
      });

  }
}
