import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flights: Flight[]

  constructor(
    private flightsService: FlightsService
  ) { }

  ngOnInit() {
    this.flightsService.getAllFlights()
    .subscribe(flights => {
      this.flights = flights;
    });
  }

}
