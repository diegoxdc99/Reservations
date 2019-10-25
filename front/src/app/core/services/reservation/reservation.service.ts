import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reservation } from 'src/app/models/reservation';
import { Flight } from 'src/app/models/flight';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient
  ) { }

  getAllFlights(document: string) {
    return this.http.get<Reservation[]>(`${environment.serverUrl}/reservations/${document}`);
  }

  createReservation(flight: Flight, document: string) {
    const body = {
      document,
      flightId: flight._id
    };
    return this.http.post<any>(`${environment.serverUrl}/reservations`, body);
  }
}
