import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any={};
  isEditable: boolean=true;

  constructor(
      private employeeService: EmployeeService, 
      private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.queryParamMap
    .pipe(switchMap(combined =>{
      let id = combined.get('id');

      console.log(id);
      return this.employeeService.get(id);  
    }))
    .subscribe(employee => this.employee=employee.data); 
  }

  toggle() {
    this.isEditable=!this.isEditable;
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
