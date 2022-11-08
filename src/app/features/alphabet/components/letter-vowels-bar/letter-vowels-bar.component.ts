import { Component, Input, OnInit } from '@angular/core';
import { LetterSound } from 'src/app/core/models/letter-sound.model';

@Component({
  selector: 'hj-letter-vowels-bar',
  templateUrl: './letter-vowels-bar.component.html',
  styleUrls: ['./letter-vowels-bar.component.css']
})
export class LetterVowelsBarComponent implements OnInit {

  //#region [Members]

  //#region [Private]

  

  //#endregion [/Private]

  //#region [Output]

  //#endregion [Output]

  //#region [Input] 

  @Input()
  set letterSounds(value: LetterSound[]) {
    console.log('letter-vowels-bar.component', 'letterSounds', value);
    this.letterVowels = value;
  }

  //#endregion [/Input]

  //#region [Public]

  public letterVowels: LetterSound[] = [];


  //#endregion [/Public]

  //#endregion [/Members]

  //#region [Constructor]

  constructor() { }

  //#endregion [/Constructor]

  //#region [Events]

  ngOnInit(): void {
  }

  //#endregion [/Events]

  //#region [Functions]

  public trackLetterSounds (index: number, item: LetterSound) {
    return item.id;
  }

  //#endregion [/Functions]

}
