import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsService } from './services/flights.service';
import { ReservationService } from './services/reservation/reservation.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FlightsService,
    ReservationService
  ]
})
export class CoreModule { }
