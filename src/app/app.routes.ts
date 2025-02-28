import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './pacient/pacient.component';
import { SalonComponent } from './salon/salon.component';
import { SectieComponent } from './sectie/sectie.component';
import { TratamentComponent } from './tratament/tratament.component';
import { AsistentaComponent } from './asistenta/asistenta.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medic', component: MedicComponent }, // Asigură-te că ruta 'medic' este aici
  { path: 'pacient', component: PacientComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'sectie', component: SectieComponent },
  { path: 'tratament', component: TratamentComponent },
  { path: 'asistenta', component: AsistentaComponent },

  // alte rute...
];
