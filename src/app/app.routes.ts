import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './pacient/pacient.component';
import { SalonComponent } from './salon/salon.component';
import { SectieComponent } from './sectie/sectie.component';
import { TratamentComponent } from './tratament/tratament.component';
import { AsistentaComponent } from './asistenta/asistenta.component';
import { CursvalutarComponent } from './cursvalutar/cursvalutar.component';
import { AuthGuard } from './auth/auth.guard';
//import { LogareComponent } from './logare/logare.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protejat
  //{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medic', component: MedicComponent },
  { path: 'pacient', component: PacientComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'sectie', component: SectieComponent },
  { path: 'tratament', component: TratamentComponent },
  { path: 'asistenta', component: AsistentaComponent },
  { path: 'cursvalutar', component: CursvalutarComponent },
  //{ path: 'logare', component: LogareComponent },
];
