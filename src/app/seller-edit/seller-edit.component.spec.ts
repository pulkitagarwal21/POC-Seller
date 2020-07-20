import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditComponent } from './seller-edit.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { SellerListComponent } from '../seller-list/seller-list.component';
import { SellerAddComponent } from '../seller-add/seller-add.component';
import { FilterPipe } from '../filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, DatePipe } from '@angular/common';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SellerAdd } from '../Models/seller-add-model';

describe('SellerEditComponent', () => {
  let component: SellerEditComponent;
  let fixture: ComponentFixture<SellerEditComponent>;
  let sellerAdd:SellerAdd = new SellerAdd;
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
    fixture = TestBed.createComponent(SellerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create seller name', () => {
    let sname = component.sellerAdd.sellerName
    expect(component.sellerAdd.sellerName).toEqual(sname);
  });
  it('should create contact name', () => {
    let cname = component.sellerAdd.contactName
    expect(component.sellerAdd.contactName).toEqual(cname);
  });
  it('should create email', () => {
    let email = component.sellerAdd.email
    expect(component.sellerAdd.email).toEqual(email);
  });
  it('should check currencies', () => {
    let currency = component.currencies
    expect(component.currencies).toContain({id: 1, name: 'DZD'});
    expect(component.currencies).toContain( {id: 2, name: 'USD'});
    expect(component.currencies).toContain({id: 4, name: 'INR'});
  });
  it('should check offices', () => {
    let office = component.offices
    expect(component.offices).toContain({id: 1, name: 'JP'});
    expect(component.offices).toContain( {id: 2, name: 'UK'});
    expect(component.offices).toContain({id: 4, name: 'IN'});
  });
  it('should check bidded', () => {
    let bidded = component.Bidded
    expect(component.Bidded).toBe(bidded);    
  });
  it('should check guranteed', () => {
    let guranteed = component.Guranteed
    expect(component.Guranteed).toBe(guranteed);    
  });
});
