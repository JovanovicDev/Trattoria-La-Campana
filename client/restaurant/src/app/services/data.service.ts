import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<number>(-1);
  idForEdit = this.messageSource.asObservable();

  private editSource = new BehaviorSubject<boolean>(false);
  edit = this.editSource.asObservable();

  private loginSource = new BehaviorSubject<boolean>(false);
  login = this.loginSource.asObservable();

  private updateTable = new BehaviorSubject<boolean>(false);
  update = this.updateTable.asObservable();

  constructor() { }

  changeMessage(id: number) {
    this.messageSource.next(id)
  }

  changeEditStatus(val: boolean) {
    this.editSource.next(val);
  }

  changeLoginStatus(val: boolean) {
    this.loginSource.next(val);
  }

  updateTableStatus(val: boolean) {
    this.updateTable.next(val);
  }

}
