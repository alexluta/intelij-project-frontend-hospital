import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importă HttpClient
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(private http: HttpClient) { }

  getPacienti(): Observable<any> {
   return this.http.get('http://localhost:8080/raportPacienti'); // API-ul de la backend
  }
}
