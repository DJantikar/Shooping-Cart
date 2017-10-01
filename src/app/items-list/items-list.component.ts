import { Component, OnInit } from '@angular/core';
import { Item } from 'app/item.model';
import { ShoppingService } from 'app/shopping.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
 
  items:Item[]=[];

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.shoppingService.initItems();
    this.items = this.shoppingService.getItems();
    this.shoppingService.itemsChanged.subscribe(
      (items:Item[]) => {
        this.items = items;
      }
    );
  }

  onRemoveItem(index : number){
    this.shoppingService.deleteItem(index);
  }

  onReload(){
    this.shoppingService.onReload();
  }
  onDecrease(index : number){
    this.shoppingService.onDecrease(index);
  }
  onIncrease(index : number){
    this.shoppingService.onIncrease(index);
  }
}
