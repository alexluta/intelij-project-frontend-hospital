import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';  // Importă provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
