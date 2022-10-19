import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    EditMenuComponent,
    BannerComponent,
    ItemsListComponent,
    LoginComponent,
    MenuFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
