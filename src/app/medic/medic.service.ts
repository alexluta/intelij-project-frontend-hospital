import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importă HttpClient
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor(private http: HttpClient) { }

  getMedici(): Observable<any> {
   return this.http.get('http://localhost:8080/raportMedici'); // API-ul de la backend
  }
}
