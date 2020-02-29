import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'Iniciar Sesion',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  /*para el modal de rest de contra*/
  {
    path: 'Recuperar Contraseña',
    loadChildren: () => import ('../login/forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
  },
  {
    path: 'Cursos',
    loadChildren: () => import('../courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'Acerca de',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'Perfil',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {

    path: 'Clases',
    loadChildren:() => import('../class/class.module').then( m => m.ClassPageModule)
  },
  {
    path:'Pagos',
    loadChildren:() => import('../payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'Calificaciones',
    loadChildren:() => import('../ratings/ratings.module').then ( m => m.RatingsPageModule)
  },
  {
    path: 'Asistencias',
    loadChildren:() => import('../assistance/assistance.module').then ( m => m.AssistancePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
