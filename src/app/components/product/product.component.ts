import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as BrainActions from '../../store/actions/brain.action';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() originalUser: string;
  @Input() description: string;
  @Input() imgUrl: string;
  @Input() id: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

  }

  goToBrainDetails(id) {
    this.router.navigate(['/brain-details/' + id]);
  }

  removeBrain(index): void {
    this.store.dispatch(new BrainActions.RemoveBrain(index));
  }
}
