import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authenticated = !!this.authService.accessToken;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
