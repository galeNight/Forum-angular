import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list'
import { MatExpansionModule } from '@angular/material/expansion'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    SideMenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [Location, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
