import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importă HttpClient
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SectieService {

  constructor(private http: HttpClient) { }

  getSectii(): Observable<any> {
   return this.http.get('http://localhost:8080/raportSectie'); // API-ul de la backend
  }
}
