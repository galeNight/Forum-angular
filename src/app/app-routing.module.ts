import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { profileComponent } from './profile/profile.component';
import { TopicComponent } from './topic/topic.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes=[
  //{path:"", component: AppComponent},
  {path: 'Roles', component: RolesComponent},
  {path: 'Side-menu',component: SideMenuComponent},
  {path: 'Account',component:AccountComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Profile',component:profileComponent},
  {path: 'Topic',component:TopicComponent},
  {path: 'Comment',component:CommentComponent},

  //{ path: '', redirectTo: '/roles', pathMatch: 'full' },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
 }
