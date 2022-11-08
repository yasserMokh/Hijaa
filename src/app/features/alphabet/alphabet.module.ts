import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphabetRoutingModule } from './alphabet-routing.module';
import { LessonGroupsComponent } from './components/lesson-groups/lesson-groups.component';
import { LetterVowelsBarComponent } from './components/letter-vowels-bar/letter-vowels-bar.component';


@NgModule({
  declarations: [
    LessonGroupsComponent,
    LetterVowelsBarComponent
  ],
  imports: [
    CommonModule,
    AlphabetRoutingModule
  ]
})
export class AlphabetModule { }
