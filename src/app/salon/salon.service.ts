import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importă HttpClient
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor(private http: HttpClient) { }

  getSaloane(): Observable<any> {
   return this.http.get('http://localhost:8080/raportSaloane'); // API-ul de la backend
  }
}
