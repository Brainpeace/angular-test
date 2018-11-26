import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrainComponent } from './new-brain.component';

describe('NewBrainComponent', () => {
  let component: NewBrainComponent;
  let fixture: ComponentFixture<NewBrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
