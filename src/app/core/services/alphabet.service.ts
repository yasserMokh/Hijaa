import { Injectable } from '@angular/core';

import { LessonGroup } from '../models/lesson-group.model';
import { Letter } from '../models/letter.model';

import LessonGroups  from '../../../assets/data/lesson-groups.json'
import Letters  from '../../../assets/data/letters.json'

@Injectable()
export class AlphabetService {

  constructor() { }

  getLessonGropups(): LessonGroup[]{
    return LessonGroups as LessonGroup[];
  }

  /* getLetter(letterId: number): Letter | undefined{
    const letter= (Letters as Letter[]).find(l=>l.id==letterId);
    return letter;
  } */

}
