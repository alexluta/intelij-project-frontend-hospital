import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicComponent } from './medic/medic.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medic', component: MedicComponent }, // Asigură-te că ruta 'medic' este aici
  // alte rute...
];
