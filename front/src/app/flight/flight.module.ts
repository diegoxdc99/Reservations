import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightsComponent } from './components/flights/flights.component';


@NgModule({
  declarations: [FlightsComponent],
  imports: [
    CommonModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
