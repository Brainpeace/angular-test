import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { MatGridListModule } from '@angular/material';
import { Component, Input } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@Component({ selector: 'app-product', template: '' })
export class ProductStubComponent {
  @Input() originalUser: string;
  @Input() description: string;
  @Input() imgUrl: string;
}

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatGridListModule, StoreModule.forRoot({})],
      declarations: [LandingPageComponent, ProductStubComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('BrainShop');
  }));
});
