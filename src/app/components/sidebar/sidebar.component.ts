import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
