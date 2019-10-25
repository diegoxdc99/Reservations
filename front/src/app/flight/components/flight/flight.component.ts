import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  @Input() flight: Flight;
  @Input() formValid: boolean;
  @Output() reserveClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  reserveFlight() {
    this.reserveClicked.emit(this.flight);
  }

}
