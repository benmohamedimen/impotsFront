import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  pwd;
  connectionError = false;
  connectedUser;

  constructor(private router: Router) { }

  ngOnInit() {

      this.router.navigate(['/login']);
   
  }

  authentication() {
    this.router.navigate(['/principal']);

  }

}
