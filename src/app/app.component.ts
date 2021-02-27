import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from './auth/store/auth.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from './store/app.reducers';
import { VendorSubmissions } from './core/models/permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  title = 'Webmobilez';
  isAuthnoticated: Observable<State>;

  get VendorSubmissionsPermissions() {
    return VendorSubmissions;
  }

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
    this.isAuthnoticated = this.store.select('authState');

  }
    logout(): void {
    let token = localStorage.getItem('token');
    let user_id = localStorage.getItem('user_id');
    console.log(token + " " + user_id);
    this.authService.logOutUser(user_id).subscribe(
      response => {
        console.log(response);
        localStorage.clear();
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/login']);
      },
      err => { console.log(err); }
    )
  }
}
