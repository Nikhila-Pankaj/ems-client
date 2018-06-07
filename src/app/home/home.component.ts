import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Employee Management System';
  employees: any;
  columnHeaders: any;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.columnHeaders = this.employeeService.getHeaders();
    
    this.employeeService.getAll()
    .subscribe(employees => this.employees = employees);
    
    console.log(this.employees);
  }

}
