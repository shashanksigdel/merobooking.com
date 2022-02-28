import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmentHeaderComponent } from './bookappointment-header.component';

describe('BookappointmentHeaderComponent', () => {
  let component: BookappointmentHeaderComponent;
  let fixture: ComponentFixture<BookappointmentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookappointmentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappointmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
