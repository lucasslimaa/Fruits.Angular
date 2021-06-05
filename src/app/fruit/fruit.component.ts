import { Component, OnInit } from '@angular/core';
import { LoginSerivce } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginSerivce) { }

  ngOnInit(): void {
    this.loginService.createLogin()
  }

}
