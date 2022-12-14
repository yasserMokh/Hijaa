import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },  
  { path: 'alphabet', loadChildren: () => import('./features/alphabet/alphabet.module').then(m => m.AlphabetModule) },
  { path: '', redirectTo:'/alphabet', pathMatch:'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
