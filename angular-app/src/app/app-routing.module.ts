import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAsAdminGuard } from './Shared/gruads/auth-as-admin.guard';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [


  {  path: '', component: LoginComponent},
  {  path: 'register', component: RegisterComponent},


  {  
    canActivate:[AuthAsAdminGuard],
    path: 'dashboard',
   component: DashboardComponent
  
  },

  { path: "**", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
