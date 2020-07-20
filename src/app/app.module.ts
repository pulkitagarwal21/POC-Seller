import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerEditComponent } from './seller-edit/seller-edit.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe, CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerListComponent,
    SellerAddComponent,
    SellerEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] ,
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
