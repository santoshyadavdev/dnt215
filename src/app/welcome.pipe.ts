import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee/employee';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(emp: Employee): string {
    return `Welcome ${emp.name}`;
  }

}
