import { Component, OnInit } from '@angular/core';
import {
  FormArray, FormBuilder,
  FormControl, FormGroup, Validators
} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
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

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.onbardingForm = this.fb.group({
      name: new FormControl({ value: 'dfgfdsgfd', disabled: true },
        { updateOn: 'blur', validators: Validators.required }
      ),
      email: new FormControl('',
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.email, CustomValidators.validateEmail
          ]
        }),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
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
        pin: new FormControl('', [Validators.required, CustomValidators.pinValidator(5)]),
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    }, { updateOn: 'blur', validators: CustomValidators.passwordValidator });

    // this.onbardingForm.addControl('id', new FormControl());
    this.bindForm();
  }

  bindForm() {
    const formData = this.employeeService.getEmployeeOnBoardingData();

    this.onbardingForm.patchValue(formData);
  }

  addExp() {
    this.pastExp.push(
      this.buildForm()
    );
  }

  private buildForm() {
    return this.fb.group({
      orgName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl('')
    });
  }

  removeControl(i: number): void {
    this.pastExp.removeAt(i);
  }

  clearAll() {
    this.pastExp.clear();
  }

  AddControl() {
    this.onbardingForm.addControl('testControl', new FormControl(''));
    // this.onbardingForm.get('').setValidators(CustomValidators.validateEmail);
  }

  addEmployee() {
    // console.log(this.onbardingForm.value);
    console.log(this.onbardingForm.getRawValue());
    this.resetForm();
  }

  resetForm() {
    this.onbardingForm.reset({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobileNo: '',
      address: {
        addr1: '',
        addr2: '',
        city: '',
        pin: ''
      },
      pastExp: []
    });
  }

}
