import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphabetRoutingModule } from './alphabet-routing.module';
import { LettersListComponent } from './components/letters-list.component';


@NgModule({
  declarations: [
    LettersListComponent
  ],
  imports: [
    CommonModule,
    AlphabetRoutingModule
  ]
})
export class AlphabetModule { }
