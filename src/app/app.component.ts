import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Brain } from './store/models/brain.model';
import { Sidebar } from './store/models/sidebar.model';
import { AppState } from './app.state';
import * as BrainActions from './store/actions/brain.action';
import * as SidebarActions from './store/actions/sidebar.action';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  // public mobileQuery: MediaQueryList;
  // public desktopQuery: MediaQueryList;
  public sidenav: MatSidenav;
  public items: Array<any> = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5'
  ];

  public singleBrain: Brain = {
    originalUser: 'Jane Doe',
    imgUrl: 'https://placeimg.com/120/120/any',
    description: '222Lorem ipsum'
  };

  public mobileQuery: any;

  brains: Observable<Brain[]>;
  sidebarState: Observable<Sidebar>;
  sidebarOpen: boolean;

  constructor(
    private store: Store<AppState>,
    // public changeDetectorRef: ChangeDetectorRef,
    // public media: MediaMatcher,
    // private router: Router,
    private mediaQueryService: MediaQueryService,
    private authService: AuthService
  ) {
    this.brains = store.select('brainStore');
    this.sidebarState = store.select('sidebarStore');
    // this.sidebarOpen = store.select(state => state);

    this.sidebarState.subscribe((data: Sidebar) => {
      if (data) {
        this.sidebarOpen = data.open;
      }
    });



    /*this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this.desktopQuery = media.matchMedia('(min-width: 1300px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this._desktopQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.desktopQuery.addListener(this._mobileQueryListener);*/

    //console.log(mediaQueryService.mobileQuery);

    /*if (this.mediaQueryService.getMobileQuery()) {
      this.store.dispatch(new SidebarActions.ToggleSidebar(false));
    } else {
      this.store.dispatch(new SidebarActions.ToggleSidebar(true));
    }*/

    //this.mediaQueryService.addQueryListener();
  }

  ngOnInit() {
    //this.mobileQuery = this.mediaQueryService.mobileQuery;
    //this.mobileQuery = this.mobileQuery.matches;
    console.log(this.mediaQueryService.mobileQuery);
  }

  sidebarOpenedChange(event: boolean) {
    this.store.dispatch(new SidebarActions.ToggleSidebar(event));
  }

  addBrain() {
    this.store.dispatch(new BrainActions.AddBrain(this.singleBrain));
  }

  removeBrain(index) {
    this.store.dispatch(new BrainActions.RemoveBrain(index));
  }

  ngOnDestroy(): void {
    this.mediaQueryService.removeEventListeners();
    // this.mobileQuery.removeListener(this._mobileQueryListener);
    // this.desktopQuery.removeListener(this._desktopQueryListener);
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
