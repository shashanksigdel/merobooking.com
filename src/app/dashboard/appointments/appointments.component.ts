import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = []
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.all().subscribe(
      (appointments) => {
        this.appointments = appointments
      }
    )
  }

  cancelAppointment(id:number): void {
    let confirmAction = confirm("Are you sure to delete this appointment?");
    if (confirmAction) {
      this.appointmentService.delete(id).subscribe(
        ()=>{
          this.appointments = this.appointments.filter(app => app.id !== id)
        }
      )
    }
  }

}


 