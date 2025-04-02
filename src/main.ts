import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importă withFetch

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Adaugă withFetch() aici
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));


