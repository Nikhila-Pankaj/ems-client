import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})

export class EmployeeService extends DataService {  

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }

   getHeaders() {
    return ["ID", "Title", "Body"];
   }
}
