import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable({providedIn: 'root'})
export class FruitService extends BaseService{
    createLogin(){
        //this.post("")
        console.log("THIS WORKS");
    }
}

