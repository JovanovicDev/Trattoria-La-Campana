import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { MenuItem } from 'src/app/model/menu-item.model';
import { AppService } from 'src/app/services/app.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  categories: Category[];
  newMenuItem: MenuItem;
  index: number;
  isEdit: boolean;

  constructor(private appService: AppService, private dataService: DataService) { 
    this.categories = [];
    this.newMenuItem = {
      id: -1,
      name: '',
      category: null,
      price: 0
    }
    this.index = -1;
    this.isEdit = false;
  }

  ngOnInit(): void {
    this.getCategories();
    this.dataService.edit.subscribe(val => {
      this.isEdit = val;
    })
    this.dataService.idForEdit.subscribe(id => {
      this.index = id;
      if(this.index != -1){
        this.getMenuItemForEdit(this.index);
      }
    });
  }

  getCategories(){
    this.appService.getCategories().subscribe((res: Category[]) => this.categories = res);
  }

  addMenuItem() {
    if(this.isEdit){
      this.appService.editMenuItem(this.newMenuItem).subscribe(() => {
        this.dataService.updateTableStatus(true);
        alert("Menu item succesfully edited!");
        this.newMenuItem = {
          id: -1,
          name: '',
          category: null,
          price: 0
        }
        this.stopEdit();
      });
    } else {
      this.appService.addMenuItem(this.newMenuItem).subscribe(() => {
        this.dataService.updateTableStatus(true);
        alert("Menu item succesfully added!");
        this.newMenuItem = {
          id: -1,
          name: '',
          category: null,
          price: 0
        }
      });
    }
    
  }

  getMenuItemForEdit(id: number){
    this.appService.getMenuItem(id).subscribe((res: MenuItem) => {
      this.newMenuItem = res;
    })
  }

  stopEdit(){
    this.dataService.changeEditStatus(false);
  }
}
