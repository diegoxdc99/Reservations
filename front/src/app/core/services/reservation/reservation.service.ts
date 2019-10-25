import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reservation } from 'src/app/models/reservation';

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
}
