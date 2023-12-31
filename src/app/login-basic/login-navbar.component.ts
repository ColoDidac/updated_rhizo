import {Component, OnInit} from '@angular/core';
import {AuthenticationBasicService} from './authentication-basic.service';
import {User} from './user';

@Component({
  selector: 'app-login-navbar,[app-login-navbar]',
  templateUrl: './login-navbar.component.html',
  styleUrls: [],
})
export class LoginNavbarComponent {

  constructor(private authenticationService: AuthenticationBasicService) {
  }

  logout(): void {
    this.authenticationService.logout();
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().username;
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  getUser(): User {
    return this.authenticationService.getCurrentUser();
  }
}
