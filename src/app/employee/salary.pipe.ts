import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(emp: Employee[], salary: number): Employee[] {
    return emp.filter((e) => e.salary >= salary);
  }

}
