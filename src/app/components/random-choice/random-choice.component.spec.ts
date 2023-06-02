import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChoiceComponent } from './random-choice.component';

describe('RandomChoiceComponent', () => {
  let component: RandomChoiceComponent;
  let fixture: ComponentFixture<RandomChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
