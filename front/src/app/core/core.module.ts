import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsService } from './services/flights.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FlightsService
  ]
})
export class CoreModule { }
