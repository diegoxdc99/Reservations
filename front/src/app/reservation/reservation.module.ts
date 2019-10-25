import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { InfoReservationComponent } from './components/info-reservation/info-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InfoReservationComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ReservationModule { }
