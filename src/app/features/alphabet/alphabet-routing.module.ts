import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettersListComponent } from './components/letters-list.component';

const routes: Routes = [{ path: '', component: LettersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule { }
