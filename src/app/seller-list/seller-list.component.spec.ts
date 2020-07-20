import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerListComponent } from './seller-list.component';
import { HeaderComponent } from '../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, DatePipe } from '@angular/common';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from '../app.component';
import { SellerAddComponent } from '../seller-add/seller-add.component';
import { SellerEditComponent } from '../seller-edit/seller-edit.component';
import { FilterPipe } from '../filter.pipe';

describe('SellerListComponent', () => {
  let component: SellerListComponent;
  let fixture: ComponentFixture<SellerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        HeaderComponent,
        SellerListComponent,
        SellerAddComponent,
        SellerEditComponent,
        FilterPipe],
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
      providers: [DatePipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check list values', () => {
    let list = component.sellerList;
    expect(component.sellerList).toEqual(list);
  });
});
