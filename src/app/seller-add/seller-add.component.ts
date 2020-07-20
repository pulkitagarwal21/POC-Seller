import { Component, OnInit } from '@angular/core';
import { SellerAdd } from '../Models/seller-add-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.css']
})
export class SellerAddComponent implements OnInit {

  public sellerName: string = '';
  public contactName: string = '';
  public email: string = '';
  public Bidded: boolean = false;
  public Guranteed: boolean = false;
  public selectedCurrencies: any = [];
  public selectedOffices: any = [];
  public sellerAdd: SellerAdd = new SellerAdd;
  public seller = [];
  public isSubmit: boolean = false;
  public isDealType: boolean = false;
  public invalidemail: boolean = false;
  public myDateValue: Date;
  public minDate: Date;
  currencies = [
    { id: 1, name: 'DZD' },
    { id: 2, name: 'USD' },
    { id: 3, name: 'EUR' },
    { id: 4, name: 'INR' },
    { id: 5, name: 'AOA' }
  ];
  offices = [
    { id: 1, name: 'JP' },
    { id: 2, name: 'UK' },
    { id: 3, name: 'US' },
    { id: 4, name: 'IN' },
    { id: 5, name: 'AU' }
  ];
  constructor(public router: Router) { }

  ngOnInit() {
    this.myDateValue = new Date();
    this.minDate = new Date();
  }

  biddedClick() {
    if (this.Bidded) {
      this.Guranteed = false;
    }
  }
  guranteedClick() {
    if (this.Guranteed) {
      this.Bidded = false;
    }
  }

  // On Submit of seller form
  onSubmit() {
    this.isSubmit = true;
    if (this.Bidded) {
      this.sellerAdd.bidded = 'Yes';
    }
    else {
      this.sellerAdd.bidded = 'No';
    }
    if (this.Guranteed) {
      this.sellerAdd.guranteed = 'Yes';
    }
    else {
      this.sellerAdd.guranteed = 'No';
    }
    if (this.sellerName == '' || this.selectedCurrencies.length == 0 || this.selectedOffices.length == 0 || (this.sellerAdd.bidded == 'No' && this.sellerAdd.guranteed == 'No')) {
      this.isDealType = true;
      return
    }
    if (!this.validateEmail(this.email)) {
      this.invalidemail = true;
      return
    }
    this.sellerAdd.sellerName = this.sellerName;
    this.sellerAdd.contactName = this.contactName;
    this.sellerAdd.email = this.email;
    this.sellerAdd.currencies = this.selectedCurrencies;
    this.sellerAdd.offices = this.selectedOffices;
    this.sellerAdd.id = Math.random();
    this.sellerAdd.date = this.myDateValue;

    // let seller = [];
    this.seller = JSON.parse(localStorage.getItem("selleradd")) || [];
    this.seller.push(this.sellerAdd);
    localStorage.setItem("selleradd", JSON.stringify(this.seller))
    this.router.navigate(['SellerList']);
  }
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
