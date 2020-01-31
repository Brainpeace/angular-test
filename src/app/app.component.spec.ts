import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({ selector: 'app-sidebar', template: '' })
export class SidebarStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        MatSidenavModule,
        MatListModule
      ],
      declarations: [AppComponent, SidebarStubComponent]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
