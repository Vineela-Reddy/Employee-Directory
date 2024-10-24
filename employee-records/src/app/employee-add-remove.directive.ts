import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Directive({
  selector: '[appEmployeeAddRemove]',
  standalone: true,
})
export class EmployeeAddRemoveDirective {
  @Input() appEmployeeAddRemove!: EmployeeComponent;
  constructor(private el: ElementRef) {}
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('add-employee')) {
      this.addEmployee();
    
  }}
  addEmployee() {
    if (this.appEmployeeAddRemove.isEditing) {
      
      const index = this.appEmployeeAddRemove.employees.findIndex(
        (emp) => emp.id === this.appEmployeeAddRemove.currentEditId
      );
      if (index !== -1) {
        this.appEmployeeAddRemove.employees[index] = 
          this.appEmployeeAddRemove.newEmployee
        
      }
    } else {
      const newId =
        Math.max(...this.appEmployeeAddRemove.employees.map((e) => e.id), 0) +
        1;
      const employeeToAdd = {
        ...this.appEmployeeAddRemove.newEmployee,
        id: newId,
      };
      this.appEmployeeAddRemove.employees.push(employeeToAdd);
    }
    this.appEmployeeAddRemove.generatePageNumbers();
    this.appEmployeeAddRemove.resetForm();
    this.appEmployeeAddRemove.sortEmployees();
  }

  }

