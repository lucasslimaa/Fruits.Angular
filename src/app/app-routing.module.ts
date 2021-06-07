import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
  ]
//   {path:'',redirectTo:'login',pathMatch:'full'},
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