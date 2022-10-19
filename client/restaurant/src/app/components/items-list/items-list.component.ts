import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';
import { AppService } from 'src/app/services/app.service';
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  menuItems: MenuItem[];
  size: number;
  page: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  search: String;
  loggedIn: boolean;
  indexForChange: number;
  subscription: Subscription;
    
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private appService: AppService, private dataService: DataService) { 
    this.menuItems = [];
    this.size = 10;
    this.page = 0;
    this.isFirstPage = true;
    this.isLastPage = false;
    this.search = '';
    this.loggedIn = false;
    this.indexForChange = -1;
    this.subscription = this.dataService.update.subscribe( data => {
      if(data) this.getMenuItems(this.page, this.size);
    });
  }

  ngOnInit(): void {
    this.getMenuItems(this.page, this.size);
    if(window.localStorage.getItem('loggedUser') != null){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    this.dataService.login.subscribe(val => {
      this.loggedIn = val;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMenuItems(page: number, size: number){
    this.appService.getMenuItems(page, size).subscribe((res: MenuItem[]) => {
      this.menuItems = res;
      //DOBAVI PAGE COUNT OVDE
    });
  }

  getPreviousMenuItems(){
    this.page = this.page - 1;

    if(this.page != 0) this.isFirstPage = false;
    else this.isFirstPage = true;

    //PROVERI VREDNOST SEARCH DA ZNAS DA LI DA POZIVAS GETMENUITEMS ILI GETFILTEREDMENUITEMS
    this.getMenuItems(this.page, this.size);
  }

  getNextMenuItems(){
    this.page = this.page + 1;

    if(this.page != 0) this.isFirstPage = false;
    else this.isFirstPage = true;

    this.getMenuItems(this.page, this.size);
  }

  filter(){
    this.appService.getFilteredMenuItems(this.page, this.size, this.search).subscribe((res: MenuItem[]) => {
      this.menuItems = res;
      //DOBAVI PAGE COUNT OVDE
    });
  }

  delete(i: number){
    const index = this.menuItems[i].id;
    this.appService.deleteMenuItem(index).subscribe(() => {
      this.dataService.updateTableStatus(true);
      alert("Menu item succesfully removed!");
    });
  }

  fillFormFields(i: number){
    this.dataService.changeMessage(this.menuItems[i].id);
    this.dataService.changeEditStatus(true);
  }

}
