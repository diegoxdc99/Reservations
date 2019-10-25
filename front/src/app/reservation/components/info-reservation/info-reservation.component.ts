import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/core/services/reservation/reservation.service';

@Component({
  selector: 'app-info-reservation',
  templateUrl: './info-reservation.component.html',
  styleUrls: ['./info-reservation.component.scss']
})
export class InfoReservationComponent {
  reservations: Reservation[];
  showData = true;
  dataError = false;
  addressForm = this.fb.group({
    document: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
    ) { }

  onSubmit() {
    this.dataError = false;
    this.showData = false;
    this.reservationService.getAllFlights(this.addressForm.get('document').value)
    .subscribe(reservations => {
      this.showData = true;
      this.reservations = reservations;
    },
    () => {
      this.dataError = true;
    });
  }
}
