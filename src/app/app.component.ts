import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Sidebar } from './store/models/sidebar.model';
import { AppState } from './app.state';
import * as SidebarActions from './store/actions/sidebar.action';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  public sidebarState: Observable<Sidebar>;
  public sidebarOpen: boolean;

  public quotes = [
    {
      text: '1 testsetset',
      peep: 'asdasda asdasdasd 1'
    },
    {
      text: '2 testsetset',
      peep: 'asdasda asdasdasd 2'
    },
    {
      text: '3 testsetset',
      peep: 'asdasda asdasdasd 3'
    },
    {
      text: '3 testsetset',
      peep: 'asdasda asdasdasd 3'
    },
    {
      text: '3 testsetset',
      peep: 'asdasda asdasdasd 3'
    }
  ];

  public now = new Date();
  public day = this.now.getDay();
  public monthDay = this.now.getDate();

  constructor(
    private store: Store<AppState>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.sidebarState = store.select('sidebarStore');
    this.sidebarState.subscribe((data: Sidebar) => {
      if (data) {
        this.sidebarOpen = data.open;
      }
    });

    this.isHandset.subscribe((isHandset) => {
      this.store.dispatch(new SidebarActions.ToggleSidebar(!isHandset));
    });
  }

  ngOnInit() {
    
    console.log(this.monthDay, this.quotes[this.day]);
  }

  sidebarOpenedChange(event: boolean) {
    this.store.dispatch(new SidebarActions.ToggleSidebar(event));
  }
}
