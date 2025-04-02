import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // Adaugă asta pentru a folosi *ngIf
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiUrl = 'http://localhost:8080/api/auth/login';  // API URL pentru login
  email: string = '';  // Variabila pentru email
  password: string = '';  // Variabila pentru parolă
  token: string | null = null;  // Token-ul JWT returnat după autentificare
  errorMessage: string = '';  // Mesaj de eroare, dacă există

  constructor(private http: HttpClient, private router: Router) {}

  // Funcția care se apelează la apăsarea butonului de login
  login() {
    const credentials = { email: this.email, password: this.password };
  
    this.http.post<any>(this.apiUrl, credentials).subscribe({
      next: (response) => {
        if (response.token) {
          const jwtToken = response.token;
          this.token = jwtToken;
          localStorage.setItem('jwtToken', jwtToken);
          this.router.navigate(['/home']); // Redirecționare după login
        } else {
          this.errorMessage = 'Token invalid sau lipsă în răspunsul serverului';
        }
      },
      error: (err) => {
        console.error('Eroare la autentificare:', err);
        this.errorMessage = 'Autentificare eșuată!';
      }
    });
  }
  
  
  

  // Funcție pentru actualizarea email-ului din input
  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  // Funcție pentru actualizarea parolei din input
  updatePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }
}
