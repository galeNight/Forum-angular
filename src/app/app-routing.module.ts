import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes=[
  {path: 'roles', component: RolesComponent},

  { path: '', redirectTo: '/roles', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
