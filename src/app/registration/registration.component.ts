import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationSerivice } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  public email: string = '';
  public passwordConfirmation: string = '';
  public showTips: Boolean = false;

  constructor(private registrationService: RegistrationSerivice, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = '';
    this.password = '';
    this.email = '';
    this.passwordConfirmation = '';
    this.showTips = false;
  }

  submit() {
    const formFields = {UserName : this.userName, Email: this.email, Password: this.password};

    if (!this.validateForm()){
      return
    }

    this.registrationService.create(formFields).subscribe(
      (res: any) => {
        this.toastr.success('Usuario criado com sucesso')
        this.router.navigateByUrl('/login');
      },
      err => {
        if (err.status != 200)
          this.toastr.error('Falha ao criar usuario.', 'Verifique os campos e tente novamente!.');
        else
          console.log(err);
      }
    );
  }

  validateForm(){

    if(this.password.trim() == ''){
      this.toastr.error('O campo senha é obrigatório');
    }

    if(this.password.trim() != ''){
      if(this.password != this.passwordConfirmation){
        this.toastr.error('Senhas nao coincidem');
        return false;
      }
    }

  if(this.email.trim() == ''){
    this.toastr.error('O campo e-mail é obrigatório');
    return false;
  }
  if(this.userName.trim() == ''){
    this.toastr.error('O campo usuario é obrigatório');
    return false;
  }

  return true;
}

showPasswordTips(){
   this.showTips= !this.showTips;
}

}
