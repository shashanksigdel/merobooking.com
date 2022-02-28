import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './dashboard/appointments/appointments.component';
import { BookAppointmentComponent } from './dashboard/book-appointment/book-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetHelpComponent } from './dashboard/get-help/get-help.component';
import { RescheduleAppointmentComponent } from './dashboard/reschedule-appointment/reschedule-appointment.component';

const routes: Routes = [
{
  path: '',
  component:  DashboardComponent
},
{
  path:'get-help', 
  component:GetHelpComponent
},
{
  path:'book-appointment', 
  component:BookAppointmentComponent
},
{
  path:'appointments', 
  component:AppointmentsComponent
},
{
  path:'reschedule-appointment/:id', 
  component:RescheduleAppointmentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
