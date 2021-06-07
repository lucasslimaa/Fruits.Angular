import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable({providedIn: 'root'})
export class RegistrationSerivice extends BaseService{

    constructor(http: HttpClient) {
        super(http);
      }
      
    create(body: any){
        return this.post('User/register', body)
    }
}

