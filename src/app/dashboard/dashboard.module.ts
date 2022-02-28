import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { RescheduleAppointmentComponent } from './reschedule-appointment/reschedule-appointment.component';
import { GetHelpComponent } from './get-help/get-help.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BookappointmentHeaderComponent } from './bookappointment-header/bookappointment-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoBackHeaderComponent } from './go-back-header/go-back-header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AppointmentsComponent,
    BookAppointmentComponent,
    RescheduleAppointmentComponent,
    GetHelpComponent,
    DashboardComponent,
    BookappointmentHeaderComponent,
    GoBackHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
