import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { LoginComponent } from './components/login/login.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';

const routes: Routes = [
  { path: 'home', component: MenuItemsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'edit', component: EditMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
