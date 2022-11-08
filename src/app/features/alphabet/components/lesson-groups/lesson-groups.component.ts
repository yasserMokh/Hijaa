import { Component, OnInit } from '@angular/core';
import { LessonGroup } from 'src/app/core/models/lesson-group.model';
import { Lesson } from 'src/app/core/models/lesson.model';
import { Letter } from 'src/app/core/models/letter.model';
import { AlphabetService } from 'src/app/core/services/alphabet.service';

@Component({
  selector: 'hj-lesson-groups',
  templateUrl: './lesson-groups.component.html',
  styleUrls: ['./lesson-groups.component.css']
})
export class LessonGroupsComponent implements OnInit {

  //#region [Members]

  //#region [Private]

  private _alphabetService: AlphabetService;

  //#endregion [/Private]

  //#region [Output]

  //#endregion [Output]

  //#region [Inoput]  

  //#endregion [/Input]

  //#region [Public]

  lessonGroups: LessonGroup[] = [];
  selectedGroupId: number = 0;
  selectedLessonId: number = 0;
  //selectedLetter: Letter = new Letter();

  //#endregion [/Public]

  //#endregion [/Members]

  //#region [Constructor]

  constructor(alphabetService: AlphabetService) {
    this._alphabetService = alphabetService;
  }

  //#endregion [/Constructor]

  //#region [Events]

  ngOnInit(): void {
    this.lessonGroups = this._alphabetService.getLessonGropups();
    if (this.lessonGroups && this.lessonGroups.length > 0) {
      this.selectedGroupId = this.lessonGroups[0].id;
    }
  }

  //#endregion [/Events]

  onGroupTitleClick(groupId: number): void {
    this.selectedGroupId = groupId;
  }

  onLessonClick(lesson: Lesson) {
    this.selectedLessonId = lesson.id;
    /* const selectedLetter = this._alphabetService.getLetter(lesson.letters[0].id);
    if (selectedLetter) {
      lesson.letters[0] = selectedLetter;
    } */

    //console.log('onLessonClick', this._alphabetService.getLetter(lesson.letters[0].id))
  }

  //#region [Functions]

  //#endregion [/Functions]

}
