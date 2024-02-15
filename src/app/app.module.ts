import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common'; // Import Location if not already imported
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Location],
  bootstrap: [AppComponent],
})
export class AppModule { }
