import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Asigură-te că aici este și provideHttpClient() pentru SSR
    ...config.providers
  ]
});

export default bootstrap;
