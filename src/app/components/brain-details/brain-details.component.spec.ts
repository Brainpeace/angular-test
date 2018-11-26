import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainDetailsComponent } from './brain-details.component';

describe('BrainDetailsComponent', () => {
  let component: BrainDetailsComponent;
  let fixture: ComponentFixture<BrainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
