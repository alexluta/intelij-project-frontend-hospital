import { Component, OnInit } from '@angular/core';
import { MedicService } from './medic.service';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {

  medici: any[] = [];  // Lista de medici
  sortType: string = 'none'; // Tipul de sortare selectat

  constructor(private medicService: MedicService) { }

  ngOnInit(): void { }

  // Metoda care se apelează când se apasă butonul
  loadRaportMedici(): void {
    this.medicService.getMedici().subscribe(data => {
      this.medici = data;
      this.sortMedici();
      this.displayMedici();
    });
  }

  sortMedici(): void {
    if (this.sortType === 'asc') {
      this.medici.sort((a, b) => a.nume.localeCompare(b.nume));
    } else if (this.sortType === 'desc') {
      this.medici.sort((a, b) => b.nume.localeCompare(a.nume));
    }
  }
  updateSorting(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.sortType = target.value;
    this.sortMedici();
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

  // Metoda pentru exportarea datelor în CSV 
  exportToCSV(): void {
    // Pop-up de confirmare înainte de a exporta
    const confirmExport = window.confirm('Ești sigur că vrei să descarci raportul?');
    if (confirmExport) {
      const header = ['Nume', 'Prenume', 'Specializare']; // Antetul pentru CSV
      const rows = this.medici.map(medic => [medic.nume, medic.prenume, medic.specializare]); // Rândurile de date

      // Crearea unui string CSV
      let csvContent = 'data:text/csv;charset=utf-8,' + header.join(';') + '\n'; // Adăugarea antetului la CSV
      rows.forEach(row => {
        csvContent += row.join(';') + '\n';  // Adăugarea fiecărui rând de date la CSV
      });

      // Crearea unui link pentru descărcare și declanșarea descărcării
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'raport_medici.csv');
      link.click();
    } else {
      console.log('Exportul a fost anulat.');  // Dacă utilizatorul anulează exportul
    }
  }
}






