import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight';
import { ReservationService } from 'src/app/core/services/reservation/reservation.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  errors = {
    'user not found': 'Usuario no encontrado',
    'the user already has a reservation': 'El usuario ya tiene una reservación',
    'the user is a minor': 'El usuario es menor de edad',
    default: 'Error creando la reserva'
  };
  flights: Flight[];

  dataError = false;
  dataSuccess = false;
  textError: string;

  reservationForm = this.fb.group({
    document: [null, Validators.required]
  });
  constructor(
    private flightsService: FlightsService,
    private reservationService: ReservationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.flightsService.getAllFlights()
    .subscribe(flights => {
      this.flights = flights;
    });
  }

  makeReservation(flight) {
    this.dataError = false;
    this.dataSuccess = false;
    this.reservationService.createReservation(flight, this.reservationForm.get('document').value)
    .subscribe(reservation => {
      this.dataSuccess = true;
    },
    ({ error }) => {
      this.dataError = true;
      this.textError = this.errors[error.error || 'default'];
    });
  }

  onSubmit() {

  }
}
