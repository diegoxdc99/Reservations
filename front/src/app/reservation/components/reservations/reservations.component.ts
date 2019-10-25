import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  @Input() reservations: Reservation[];
  constructor() { }

  ngOnInit() {

  }

}
