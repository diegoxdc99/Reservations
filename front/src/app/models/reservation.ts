import { Flight } from './flight';
import { User } from './user';

export interface Reservation {
  _id: string;
  userId: string;
  flightId: string;
  cost: number;
  extraCost: number;
  createdAt: Date;
  flight: Flight;
  user: User;
}
