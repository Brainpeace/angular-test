import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/services/media-query.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public desktopQuery;

  constructor(private mediaQueryService: MediaQueryService, private authService: AuthService) {
    this.desktopQuery = mediaQueryService.getDesktopQuery();
  }

  ngOnInit() {

  }
}
