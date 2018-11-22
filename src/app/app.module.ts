import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { environment } from 'src/environments/environment.prod';
import { brainReducer } from './reducers/brain.reducer';
import { sidebarReducer } from './reducers/sidebar.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    StoreModule.forRoot({
      brainStore: brainReducer,
      sidebarStore: sidebarReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'BrainShop',
      maxAge: 15, // Retains last 15 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
