import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {
  public sellerList = [];
  public p: number = 1;
  public openSellerAdd: boolean = false;
  public searchText: string;
  public isOpenEdit: boolean = false;
  public index: any;
  public SelectedIDs: any = [];
  constructor() { }

  ngOnInit() {
    this.sellerList = JSON.parse(localStorage.getItem("selleradd"));
    console.log(this.sellerList);
  }
  openAdd() {
    this.openSellerAdd = true;
  }

  // On Single delete Seller List
  onDelete(deleteId: string) {
    let i = this.sellerList.findIndex(p => p.id == deleteId)
    if (i != -1) {
      this.sellerList.splice(i, 1);
      console.log('abc' + JSON.stringify(this.sellerList));
      localStorage.setItem("selleradd", JSON.stringify(this.sellerList))
    }
  }
  openEdit(i) {
    this.isOpenEdit = true;
    this.index = i;
  }
  
  checkbox(id, event: any) {
    this.SelectedIDs.push(id);
  }

  // On Multiple Delete
  delete() {
    this.SelectedIDs.forEach((obj) => {
      this.sellerList = JSON.parse(localStorage.getItem("selleradd"));
      this.sellerList = this.sellerList.filter(item => item.id !== obj);
      localStorage.setItem("selleradd", JSON.stringify(this.sellerList))
    })
  }
}
