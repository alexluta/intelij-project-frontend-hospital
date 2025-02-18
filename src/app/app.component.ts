import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // importați RouterModule pentru rute

@Component({
  selector: 'app-root',
  standalone: true,  // declară componenta ca fiind standalone
  imports: [RouterModule], // adăugați aici modulele necesare, cum ar fi RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hospital';
}
