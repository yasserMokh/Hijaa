import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterVowelsBarComponent } from './letter-vowels-bar.component';

describe('LetterVowelsBarComponent', () => {
  let component: LetterVowelsBarComponent;
  let fixture: ComponentFixture<LetterVowelsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterVowelsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterVowelsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
