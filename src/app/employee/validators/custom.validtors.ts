import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static validateEmail(control: AbstractControl) {
    const email = control.value as string;
    if (email.includes('test')) {
      return { inValidEmail: true }
    }
    return null;
  }

  static pinValidator(length: number) {
    return (control: AbstractControl) => {
      const pin = control.value as string;
      if (pin.length < length || pin.length > length) {
        return { inValidPin: true }
      }
      return null;
    }
  }
}
