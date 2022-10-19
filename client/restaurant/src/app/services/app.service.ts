import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { MenuItem } from '../model/menu-item.model';
import { User } from '../model/user.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private itemsUrl = 'http://localhost:8080/api/items';
  private usersUrl = 'http://localhost:8080/api/users';
  private categoriesUrl = 'http://localhost:8080/api/categories';

  httpOptions = {
    headers: { 'Content-Type': 'application/json' }
  };
  
  constructor(private http: HttpClient) { }

  getMenuItems(page: number, size: number): Observable<MenuItem[]> {
    const url = 'http://localhost:8080/api/items?page=' + page + '&size=' + size;

    return this.http
      .get<MenuItem[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError<MenuItem[]>('getMenuItems', [])));
  }

  getFilteredMenuItems(page: number, size: number, search: String): Observable<MenuItem[]> {
    const url = 'http://localhost:8080/api/items?page=' + page + '&size=' + size + '&search=' + search;

    return this.http
      .get<MenuItem[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError<MenuItem[]>('getFilteredMenuItems', [])));
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.categoriesUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Category[]>('getCategories', [])));
  }
  
  addMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    return this.http
      .post<MenuItem>(this.itemsUrl, menuItem, this.httpOptions)
      .pipe(catchError(this.handleError('addMenuItem', menuItem)));
  }

  editMenuItem(menuItem: MenuItem): Observable<MenuItem> {
    const url = `${this.itemsUrl}/${menuItem.id}`;

    return this.http
      .put<MenuItem>(url, menuItem)
      .pipe(catchError(this.handleError<MenuItem>('editMenuItem')))
  }

  deleteMenuItem(id: number): Observable<MenuItem> {
    const url = `${this.itemsUrl}/${id}`;

    return this.http
      .delete<MenuItem>(url, this.httpOptions)
      .pipe(catchError(this.handleError<MenuItem>('deleteMenuItem')));
  }

  getMenuItem(id: number): Observable<MenuItem>{
    const url = `${this.itemsUrl}/${id}`;
    
    return this.http
      .get<MenuItem>(url, this.httpOptions)
      .pipe(catchError(this.handleError<MenuItem>('getMenuItem')));
  }

  validateUser(username: String, password: String): Observable<User>{
    const url = this.usersUrl + '?username=' + username + '&password=' + password;
    
    return this.http
      .get<User>(url, this.httpOptions)
      .pipe(catchError(this.handleError<User>('validateUser')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
