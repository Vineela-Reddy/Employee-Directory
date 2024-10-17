import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,HighlightDirective,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 employees=   [
    { name: 'Vineela', id: 1, age: 78, phone: '1234567890', address: '123 Main St' },
    { name: 'Hasini', id: 2, age: 42, phone: '9876543210', address: '456 Elm St' },
    { name: 'Srujana', id: 3, age: 56, phone: '1234567890', address: '123 Main St' },
    { name: 'Rakesh', id: 4, age: 20, phone: '9876543210', address: '456 Elm St' },
    { name: 'Ravi', id: 5, age: 55, phone: '5555555555', address: '789 Oak St' },
    { name: 'John ', id: 6, age: 10, phone: '1234567890', address: '123 Main St' },
    { name: 'Sai', id: 7, age: 40, phone: '9876543210', address: '456 Elm St' },
    { name: 'Reddy', id: 8, age: 30, phone: '5555555555', address: '789 Oak St' },

  ];
  searchTerm: string = '';

  get filteredEmployees() {
    return this.employees.filter(employee => 
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())||
      employee.age.toString().includes(this.searchTerm.toLowerCase())||
      employee.id.toString().includes(this.searchTerm.toLowerCase())||
      employee.address.toString().includes(this.searchTerm.toLowerCase())||
      employee.phone.toString().includes(this.searchTerm.toLowerCase())
    );
  }
}

