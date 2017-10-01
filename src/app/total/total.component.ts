import { Component, OnInit } from '@angular/core';
import { Item } from 'app/item.model';
import { ShoppingService } from 'app/shopping.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  
  items : Item[] =[];
  discount : number =0;
  typeDiscount : number =0;
  orderTotal :number =0;
  itemsTotal : number =0;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingService.getItems();
    this.shoppingService.itemsChanged.subscribe(
      (items:Item[]) => {
        this.items = items;
        this.reset();
        this.calculate(this.items);
      }
    );
    this.calculate(this.items);
  }
  reset(){
    this.discount  =0;
    this.typeDiscount =0;
    this.orderTotal =0;
    this.itemsTotal  =0;
  }
  calculate(items:Item[]){
   
    for(let i=0;i<items.length;i++){
      const item:Item = items[i];
      //console.log( item.price * item.qty);
      this.itemsTotal = this.itemsTotal+item.price * item.qty;
      this.discount = this.discount+(item.discount/100) * item.price * item.qty;
      if(item.type === 'fiction')
        this.typeDiscount =  this.typeDiscount+0.15*item.price * item.qty;
    }
    this.orderTotal = this.itemsTotal -this.discount +this.typeDiscount;
  }
}
