import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Employee Management System';
  employees: any[]=[];
  columnHeaders: any;
  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.columnHeaders = this.employeeService.getHeaders();
    
    console.log(this.columnHeaders);

    this.employeeService.getAll()
    .subscribe(employees => this.employees=employees.data);
  }

  viewEmployee(id) {
    this.router.navigate(['/employee'], {queryParams: {id: id}});
  }

}
