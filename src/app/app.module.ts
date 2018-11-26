import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatSidenavModule, MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { environment } from 'src/environments/environment.prod';
import { brainReducer } from './store/reducers/brain.reducer';
import { sidebarReducer } from './store/reducers/sidebar.reducer';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './auth/auth-guard.service';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewBrainComponent } from './components/new-brain/new-brain.component';
import { BrainDetailsComponent } from './components/brain-details/brain-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EditBrainComponent } from './components/edit-brain/edit-brain.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductComponent,
    LoginComponent,
    LandingPageComponent,
    EditBrainComponent,
    NewBrainComponent,
    BrainDetailsComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    StoreModule.forRoot({
      brainStore: brainReducer,
      sidebarStore: sidebarReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'BrainShop',
      maxAge: 15, // Retains last 15 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthGuard, AuthService, HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
