import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import {FormGroup, FormControl,FormArray, Validators, Form} from '@angular/forms'

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {


  constructor( 
    private appointmentService:AppointmentService,
    private router: Router
    ) { }


  ngOnInit(): void {
  }

  bookAppointmentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    gender:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormArray([]),
    address:new FormControl(''),
    branch:new FormControl(''),
    date:new FormControl(),
    time:new FormControl(''),
    description:new FormControl(''),
  })

  get userName(){
    return this.bookAppointmentForm.get('name')
  }
  
  get phoneControls(){
    return (<FormArray>this.bookAppointmentForm.get('phone')).controls
  }

  onAddPhone(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.bookAppointmentForm.get('phone')).push(control)
  }

  bookAppointmentSubmit(){
    const data = this.bookAppointmentForm.value
    // console.log(data)
    this.appointmentService.create(data).subscribe(
          ()=>{
            this.router.navigate(['/'])
          }
        )
  }
}
