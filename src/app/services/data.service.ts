import { BadInput } from './../common/bad-input';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from './../common/not-found-error';
import { AppErrors } from './../common/app-errors';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(map(response => response.json()),
    catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url,resource)
    .pipe(map(response => response.json()),
    catchError(this.handleError));    
  }

  update(id, isRead) {
    return this.http.patch(this.url+'/'+id,isRead)
    .pipe(map(response => response.json()),
    catchError(this.handleError)); 
  }

  delete(id) {
    return this.http.delete(this.url+'/'+id)
    .pipe(map(response => response.json()),
      catchError(this.handleError)
    );   
  }

  private handleError (error: Response | any) 
  {
      console.error(error.message || error);
      if( error.status===404) {
        return throwError(new NotFoundError(error.json()));
      } 
      else if (error.status === 400) {
        return throwError(new BadInput(error.json()));
      } 
      else {
        return throwError(new AppErrors(error.json()));  
      }   
  }
}
