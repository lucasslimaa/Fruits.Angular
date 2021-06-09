import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = '';
    this.password  = '';
  }

  submit() {
    const formFields = {UserName : this.userName, Password: this.password};

    if(!this.validateForm()){
      return;
    }

    this.loginService.login(formFields).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 401 || err.status == 400)
          this.toastr.error('Usuario ou senha inválidos.', 'Falha na autenticação!.');
        else
          console.log(err);
      }
    );
  }

  validateForm(){

    if(this.userName == '' || this.password == ''){
      this.toastr.error('Usuario ou senha inválidos');
      return false;
    }
     return true;
  }

}