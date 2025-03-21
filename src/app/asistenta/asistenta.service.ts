import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistentaService {

  constructor(private http: HttpClient) { }

  getAsistente(): Observable<any> {
    return this.http.get('http://localhost:8080/raportAsistente'); // API-ul de la backend
  }
}
