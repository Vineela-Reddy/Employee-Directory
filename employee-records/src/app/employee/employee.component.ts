import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { FormsModule } from '@angular/forms';
import { EmployeeAddRemoveDirective } from '../employee-add-remove.directive';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    FormsModule,
    EmployeeAddRemoveDirective,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  isEditing: boolean = false;
  currentEditId: number | null = null;
  EditEmployee(id: number) {
    const employeeToEdit = this.employees.find((emp) => emp.id === id);
    if (employeeToEdit) {
      this.newEmployee = employeeToEdit ;
      this.isEditing = true;
      this.currentEditId = id;
    }
  }

  resetForm() {
    this.newEmployee = { name: '', id: 0, age: 0, phone: '', address: '' };
    this.isEditing = false;
    this.currentEditId = null;
  }
  sortEmployees() {
    this.employees.sort((a, b) => a.id - b.id);
  }

  deleteEmployee(id:number) {
    this.employees=this.employees.filter((employee)=>employee.id!=id)
  }

  employees = [
    {
      name: 'Vineela',
      id: 1,
      age: 78,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Hasini',
      id: 2,
      age: 42,
      phone: '9876543210',
      address: '456 Elm St',
    },
    { name: 'Ravi', id: 5, age: 55, phone: '5555555555', address: '78 Oak St' },
    {
      name: 'John ',
      id: 6,
      age: 10,
      phone: '1234567890',
      address: '123 Main St',
    },
    { name: 'Sai', id: 7, age: 40, phone: '9876543210', address: '456 Elm St' },
    {
      name: 'Reddy',
      id: 8,
      age: 30,
      phone: '5555555555',
      address: '789 Oak St',
    },
    {
      name: 'Vineela',
      id: 9,
      age: 78,
      phone: '1234567890',
      address: '13 Main St',
    },
    {
      name: 'Hasini',
      id: 10,
      age: 42,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Rakesh',
      id: 17,
      age: 20,
      phone: '9876543210',
      address: '45 Elm St',
    },
    {
      name: 'Ravi',
      id: 18,
      age: 55,
      phone: '5555555555',
      address: '798 Oak St',
    },
    {
      name: 'John ',
      id: 19,
      age: 10,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Sai',
      id: 20,
      age: 40,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Reddy',
      id: 21,
      age: 30,
      phone: '5555555555',
      address: '789 Oak St',
    },
    {
      name: 'Vineela',
      id: 22,
      age: 78,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Hasini',
      id: 23,
      age: 42,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Srujana',
      id: 24,
      age: 56,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Rakesh',
      id: 25,
      age: 20,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'John ',
      id: 26,
      age: 10,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Sai',
      id: 27,
      age: 40,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Srujana',
      id: 11,
      age: 56,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Srujana',
      id: 3,
      age: 56,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Rakesh',
      id: 4,
      age: 20,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Rakesh',
      id: 12,
      age: 20,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Ravi',
      id: 13,
      age: 55,
      phone: '5555555555',
      address: '79 Oak St',
    },
    {
      name: 'John ',
      id: 14,
      age: 10,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Sai',
      id: 15,
      age: 40,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Reddy',
      id: 16,
      age: 30,
      phone: '5555555555',
      address: '789 Oak St',
    },
    {
      name: 'Reddy',
      id: 28,
      age: 30,
      phone: '5555555555',
      address: '789 Oak St',
    },
    {
      name: 'Rakesh',
      id: 29,
      age: 20,
      phone: '9876543210',
      address: '45 Elm St',
    },
    {
      name: 'Ravi',
      id: 30,
      age: 55,
      phone: '5555555555',
      address: '798 Oak St',
    },
    {
      name: 'John ',
      id: 31,
      age: 10,
      phone: '1234567890',
      address: '123 Main St',
    },
    {
      name: 'Sai',
      id: 32,
      age: 40,
      phone: '9876543210',
      address: '456 Elm St',
    },
    {
      name: 'Reddy',
      id: 33,
      age: 30,
      phone: '5555555555',
      address: '789 Oak St',
    },
  ];

  newEmployee = {
    name: '',
    id: 0,
    age: 0,
    phone: '',
    address: '',
  };
  searchTerm: string = '';

  itemsPerPage = 10;
  currentPage = 1;
  visiblePages: (number | string)[] = [];
  totalPages: number = 0;
  pages: number[] = [];

  get filteredEmployees() {
    const filtered = this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.age.toString().includes(this.searchTerm.toLowerCase()) ||
        employee.id.toString().includes(this.searchTerm.toLowerCase()) ||
        employee.address
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        employee.phone.toString().includes(this.searchTerm.toLowerCase())
    );

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.updateVisiblePages();
    this.sortEmployees();
    return filtered;
  }

  ngOnInit(): void {
    this.generatePageNumbers();
  }

  generatePageNumbers() {
    this.pages = Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const lastPage = this.totalPages;
    this.visiblePages = [];
    const range = 2;
    const firstPage = 1;
    if (this.currentPage === 1) {
      this.visiblePages.push(1);
    }
    if (lastPage > 5) {
      const start = Math.max(this.currentPage - range, 2);
      const end = Math.min(this.currentPage + range, lastPage - 1);

      for (let i = start; i <= end; i++) {
        this.visiblePages.push(i);
      }

      if (end < lastPage - 1) {
        this.visiblePages.push('...');
      }
      if (end < lastPage) {
        this.visiblePages.push(lastPage);
      }
    } else {
      for (let i = 2; i <= lastPage; i++) {
        this.visiblePages.push(i);
      }
    }
  }

  goToPage(page: number | string) {
    if (page === '...') return;
    if (typeof page === 'number' && (page < 1 || page > this.totalPages))
      return;
    if (typeof page === 'number') {
      this.currentPage = page;
    }
    this.updateVisiblePages();
  }

  goToFirstPage() {
    this.goToPage(1);
  }

  goToLastPage() {
    this.goToPage(this.totalPages);
  }

  goToPreviousPage() {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }
}
