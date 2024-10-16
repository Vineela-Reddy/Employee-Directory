import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-records';
}
