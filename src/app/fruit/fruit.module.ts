import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitRoutingModule } from './fruit-routing.module';
import { FruitComponent } from './fruit.component';

@NgModule({
  declarations: [
    FruitComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FruitRoutingModule
  ],
  providers: [  
  ],
})
export class FruitModule { }
