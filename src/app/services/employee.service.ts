import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})

export class EmployeeService extends DataService {  

  constructor(http: Http) {
    super('https://reqres.in/api/users', http);
   }

   getHeaders() {
    return ["ID", "First Name", "Last Name", ""];
   }
}
