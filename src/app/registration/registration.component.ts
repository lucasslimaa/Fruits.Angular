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

  private userName: string = '';
  private password: string = '';

  constructor(private registrationService: RegistrationSerivice, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  submit() {
    const formFields = {UserName : this.userName, Password: this.password};

    this.registrationService.login(formFields).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 401)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}