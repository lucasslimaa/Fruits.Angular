import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
  ]
//   {path:'',redirectTo:'/user/login',pathMatch:'full'},
//   {
//     path: 'login', component: LoginComponent,
//     children: [
//       { path: 'registration', component: RegistrationComponent },
//       { path: 'login', component: LoginComponent }
//     ]
//   },
//   {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }