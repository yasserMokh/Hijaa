import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu.component';
import { AlphabetService } from './services/alphabet.service';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  providers:[
    AlphabetService
  ]
})
export class CoreModule { }
