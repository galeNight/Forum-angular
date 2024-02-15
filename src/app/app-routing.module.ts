import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AppComponent } from './app.component';


const routes: Routes=[
  {path:"", component: AppComponent},
  {path: 'roles', component: RolesComponent},

  //{ path: '', redirectTo: '/roles', pathMatch: 'full' },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
