import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AsistentaComponent } from './asistenta/asistenta.component';
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './pacient/pacient.component';
import { SalonComponent } from './salon/salon.component';
import { SectieComponent } from './sectie/sectie.component';
import { TratamentComponent } from './tratament/tratament.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'asistenta', component: AsistentaComponent },
  { path: 'medic', component: MedicComponent },
  { path: 'pacient', component: PacientComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'sectie', component: SectieComponent },
  { path: 'tratament', component: TratamentComponent },
  { path: '', redirectTo: '/medic', pathMatch: 'full' }
];
