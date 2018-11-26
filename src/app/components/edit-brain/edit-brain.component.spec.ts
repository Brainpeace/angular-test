import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrainComponent } from './edit-brain.component';

describe('EditBrainComponent', () => {
  let component: EditBrainComponent;
  let fixture: ComponentFixture<EditBrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
