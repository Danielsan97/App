import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'pages/home/:id',
    loadChildren: () => import('./pages/home/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pages/login/:id',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pages/courses/:id',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'pages/about/:id',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'pages/class/:id',
    loadChildren: () => import('./pages/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'pages/payments/:id',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'pages/login/forgotpass/:id',
    loadChildren:() => import('./pages/login/forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
  },
  {
    path: 'pages/ratings/:id',
    loadChildren: () => import('./pages/ratings/ratings.module').then( m => m.RatingsPageModule)
  },
  {
    path: 'pages/assistance/:id',
    loadChildren: () => import('./pages/assistance/assistance.module').then( m => m.AssistancePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
