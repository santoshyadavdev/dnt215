import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  get pastExp() {
    return this.onbardingForm.get('pastExp') as FormArray;
  }
  search: FormControl = new FormControl('Angular');

  onbardingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.onbardingForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      mobileNo: new FormControl(''),
      address: this.fb.group({
        addr1: new FormControl(''),
        addr2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array([
        this.fb.group({
          orgName: new FormControl(''),
          fromDate: new FormControl(''),
          toDate: new FormControl(''),
          designation: new FormControl('')
        })
      ])
    })

    // this.onbardingForm.addControl('id', new FormControl());
  }

}
