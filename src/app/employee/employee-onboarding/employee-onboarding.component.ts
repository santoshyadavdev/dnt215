import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup,
  FormBuilder, FormArray, Validators
} from '@angular/forms';
import { CustomValidators } from '../validators/custom.validtors';


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
      name: new FormControl({ value: 'dfgfdsgfd', disabled: true }, Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email, CustomValidators.validateEmail
      ]),
      mobileNo: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12)
        ]),
      address: this.fb.group({
        addr1: new FormControl('', Validators.required),
        addr2: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        pin: new FormControl('', [Validators.required, CustomValidators.pinValidator(5) ]),
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

  addExp() {
    this.pastExp.push(
      this.fb.group({
        orgName: new FormControl(''),
        fromDate: new FormControl(''),
        toDate: new FormControl(''),
        designation: new FormControl('')
      }))
  }

  removeControl(i: number): void {
    this.pastExp.removeAt(i);
  }

  clearAll() {
    this.pastExp.clear();
  }

  AddControl() {
    this.onbardingForm.addControl("testControl", new FormControl(''));
  }

  addEmployee() {
    // console.log(this.onbardingForm.value);
    console.log(this.onbardingForm.getRawValue());
  }

}
