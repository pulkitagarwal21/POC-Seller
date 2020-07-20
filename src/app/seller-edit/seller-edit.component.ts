import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerAdd } from '../Models/seller-add-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.css']
})
export class SellerEditComponent implements OnInit {
  @Input() obIndex: any;
  public ind: any;
  public sellerList:any = [];
  public sellerAdd: SellerAdd = new SellerAdd;
  public Bidded: boolean = false;
  public Guranteed: boolean = false;
  public seller:any = [];
  public isSubmit: boolean = false;
  public isDealType: boolean = false;
  public invalidemail: boolean = false;
  public myDateValue: any;
  public minDate: Date;
  public date: Date;
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
  constructor(private activatedRoute: ActivatedRoute, public router: Router, public datepipe: DatePipe) { }

  ngOnInit() {
    this.ind = this.activatedRoute.snapshot.queryParamMap.get('ind');
    this.sellerList = JSON.parse(localStorage.getItem("selleradd"));
    if (this.activatedRoute.snapshot.queryParamMap.get('sid')) {
      this.getSellerDetail(this.activatedRoute.snapshot.queryParamMap.get('sid'));
          }
    this.minDate = new Date();

  }

  // Get seller details
  getSellerDetail(sid: any) {
    let i = this.sellerList.filter(x=>x.id==sid);
     this.sellerAdd = i[0];
    this.date = this.sellerAdd.date;
    this.sellerAdd.date = this.datepipe.transform(this.date, 'MM/dd/yyyy');
    if (this.sellerAdd.bidded == 'Yes') {
      this.Bidded = true;
    }
    else {
      this.Bidded = false;
    }
    if (this.sellerAdd.guranteed == 'Yes') {
      this.Guranteed = true;
    }
    else {
      this.Guranteed = false;
    }
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

  // On submit Seller Form
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
    if (this.sellerAdd.sellerName == '' || this.sellerAdd.currencies.length == 0 || this.sellerAdd.offices.length == 0 || (this.sellerAdd.bidded == 'No' && this.sellerAdd.guranteed == 'No')) {
      this.isDealType = true;
      return
    }
    if (!this.validateEmail(this.sellerAdd.email)) {
      this.invalidemail = true;
      return
    }
    // let seller = [];
    this.seller = JSON.parse(localStorage.getItem("selleradd")) || [];
    //  this.seller.push(this.sellerAdd);
    this.seller.splice(this.ind, 1, this.sellerAdd);
    localStorage.setItem("selleradd", JSON.stringify(this.seller))
    this.router.navigate(['SellerList']);
  }
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
