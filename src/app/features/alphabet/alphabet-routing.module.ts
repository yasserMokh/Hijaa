import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonGroupsComponent } from './components/lesson-groups/lesson-groups.component';

const routes: Routes = [{ path: '', component: LessonGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetRoutingModule { }
