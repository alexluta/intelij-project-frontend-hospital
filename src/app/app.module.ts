import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // importați rutele din `app.routes.ts`
import { AppComponent } from './app.component'; // importați AppComponent

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // înregistrează rutele
    AppComponent, // adăugați componenta standalone aici
  ],

})
export class AppModule {}
