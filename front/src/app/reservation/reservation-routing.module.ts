import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoReservationComponent } from './components/info-reservation/info-reservation.component';


const routes: Routes = [
  {
    path: 'consult',
    component: InfoReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
