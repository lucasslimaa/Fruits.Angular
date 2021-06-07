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

  constructor(private registrationService: RegistrationSerivice, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = '';
    this.password = '';
    this.email = '';
  }

  submit() {
    const formFields = {UserName : this.userName, Email: this.email, Password: this.password};

    this.registrationService.create(formFields).subscribe(
      (res: any) => {
        this.toastr.success('Usuario criado com sucesso')
        this.router.navigateByUrl('/login');
      },
      err => {
        if (err.status == 401)
          this.toastr.error('Falha ao criar usuario.', 'Verifique os campos e tente novamente!.');
        if (err.status == 400)
          this.toastr.error('Verifique os campos e tente novamente');
        else
          console.log(err);
      }
    );
  }
}