import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable({providedIn: 'root'})
export class LoginService extends BaseService{

    constructor(http: HttpClient) {
        super(http);
      }

    login(body: any){
        return this.post('User/login', body);
    }  
}

