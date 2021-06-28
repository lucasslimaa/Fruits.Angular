import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';

  constructor(private router: Router, private toastr: ToastrService, private authService : AuthService) { }

  ngOnInit(): void {
    this.userName = '';
    this.password  = '';
  }

  submit() {
    const formFields = {UserName : this.userName, Password: this.password};

    if(!this.validateForm()){
      return;
    }
    
    this.authService.login(formFields);

  }

  validateForm(){

    if(this.userName.trim() == '' || this.password.trim() == ''){
      this.toastr.error('Insira os campos Usuario e Senha!');
      return false;
    }
     return true;
  }

}