import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerEditComponent } from './seller-edit/seller-edit.component';

const routes: Routes = [
  {
    path: 'SellerList', component: SellerListComponent
  },
  {
    path:'SellerAdd', component: SellerAddComponent
  },
  {
    path:'SellerEdit', component: SellerEditComponent
  },
  {
    path: '', redirectTo: 'SellerList', pathMatch: 'full'
  },
  {
    path: '**', component: SellerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
