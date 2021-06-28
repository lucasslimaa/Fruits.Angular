import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { BaseService } from "./base.service";

@Injectable({providedIn:'root'}) 
export class AuthService extends BaseService{
    
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn(){
        return this.loggedIn.asObservable();
    }

    constructor(http: HttpClient, private router : Router, private toastr : ToastrService) {
        super(http);
    }

    login(body: any){
        return this.post('User/login', body).subscribe(
            (res: any) => {
              localStorage.setItem('token', res.token);
              this.loggedIn.next(true);
              this.router.navigate(['/home']);                       
            },
            err => {
                if (err.status)
                  this.toastr.error('Usuario ou senha inválidos.', 'Falha na autenticação!.');}
        )
    }

    logout(){
        console.log(this.isLoggedIn)
        this.loggedIn.next(false);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}