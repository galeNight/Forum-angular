import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  {path:"", component: AppComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'side',component: SideMenuComponent},
  {path: 'Account',component:AccountComponent},
  {path: 'login',component:LoginComponent},

  //{ path: '', redirectTo: '/roles', pathMatch: 'full' },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
