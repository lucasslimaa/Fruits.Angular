import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
   CommonModule,
   RegistrationRoutingModule,
   FormsModule,
  ],
  providers: [  
  ],
})
export class RegistrationModule { }
