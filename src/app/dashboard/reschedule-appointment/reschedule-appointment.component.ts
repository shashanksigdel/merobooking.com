import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-reschedule-appointment',
  templateUrl: './reschedule-appointment.component.html',
  styleUrls: ['./reschedule-appointment.component.css']
})
export class RescheduleAppointmentComponent implements OnInit {

  form: FormGroup;
  id:number;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router,
    ) { 
      this.form = this.formBuilder.group({
        name: '',
        gender:'',
        email: '',
        phone: '',
        address: '',
        branch: '',
        date: '',
        time: '',
        description: ''
      })
      this.id = this.route.snapshot.params['id'];
      this.appointmentService.get(this.id).subscribe(
        (appointment) => this.form.patchValue(appointment)
      )
     }

  ngOnInit(): void {
  }

  submit():void{
    this.appointmentService.update(this.id, this.form.getRawValue()).subscribe(
      ()=>{
        this.router.navigate(['/'])
      }
    )
  }
}
