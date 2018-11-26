import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Brain } from '../../store/models/brain.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { map } from 'rxjs/operators';
import * as BrainActions from '../../store/actions/brain.action';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  public singleBrain: Brain = {
    originalUser: 'Jane Doe',
    imgUrl: 'https://placeimg.com/120/120/any',
    description: '222Lorem ipsum'
  };

  brains: Observable<Brain[]>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.brains = store.select('brainStore');
  }

  ngOnInit() {

  }

  addBrain(): void {
    this.store.dispatch(new BrainActions.AddBrain(this.singleBrain));
  }
}
