import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../models/flight';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllFlights() {
    return this.http.get<Flight[]>(`${environment.serverUrl}/flights`);
  }
}
