import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightsComponent } from './components/flights/flights.component';
import { MaterialModule } from '../material/material.module';
import { FlightComponent } from './components/flight/flight.component';


@NgModule({
  declarations: [FlightsComponent, FlightComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    MaterialModule
  ]
})
export class FlightModule { }
