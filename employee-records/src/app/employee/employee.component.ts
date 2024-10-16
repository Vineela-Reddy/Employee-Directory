import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Employee {
  name: string;
  id: number;
  age: number;
  phone: string;
  address: string;
}
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 employees: Employee[] = [
    { name: 'Vineela', id: 1, age: 25, phone: '123-456-7890', address: '123 Main St' },
    { name: 'Hasini', id: 2, age: 42, phone: '987-654-3210', address: '456 Elm St' },
    { name: 'Srujana', id: 3, age: 56, phone: '123-456-7890', address: '123 Main St' },
    { name: 'Rakesh', id: 4, age: 20, phone: '987-654-3210', address: '456 Elm St' },
    { name: 'Ravi', id: 5, age: 55, phone: '555-555-5555', address: '789 Oak St' },
    { name: 'John ', id: 6, age: 10, phone: '123-456-7890', address: '123 Main St' },
    { name: 'Sai', id: 7, age: 40, phone: '987-654-3210', address: '456 Elm St' },
    { name: 'Reddy', id: 8, age: 30, phone: '555-555-5555', address: '789 Oak St' },

  ];
}

