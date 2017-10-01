import { Injectable, OnInit } from '@angular/core';
import { Item } from 'app/item.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingService implements OnInit{
  

  items: Item[]=[];
  itemsChanged = new Subject<Item[]>();
    
  constructor() { }

  itemsJSON = [ { 'id': 9090, 'name': 'Item1', 'price': 200, 'discount': 10, 'type': 'fiction', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9091, 'name': 'Item2', 'price': 250, 'discount': 15, 'type': 'literature', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9092, 'name': 'Item3', 'price': 320, 'discount': 5, 'type': 'literature', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9093, 'name': 'Item4', 'price': 290, 'discount': 0, 'type': 'thriller', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9094, 'name': 'Item1', 'price': 500, 'discount': 25, 'type': 'thriller', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9095, 'name': 'Item2', 'price': 150, 'discount': 5, 'type': 'literature', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9096, 'name': 'Item3', 'price': 700, 'discount': 22, 'type': 'literature', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' }, 
  { 'id': 9097, 'name': 'Item4', 'price': 350, 'discount': 18, 'type': 'fiction', 'img_url': 'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg' } ];

  ngOnInit(): void {
  }

  onReload(){
    this.items=[];
    for(var i in this.itemsJSON){
      const item = this.itemsJSON[i];
      const qty =1;
      const itemObj = new Item(item['id'],
                      item['name'],
                      qty,
                      item['price'],
                      item['discount'],
                      item['type'],
                      item['img_url']
                    );
      this.items.push(itemObj);
    }
    this.itemsChanged.next(this.items.slice());
  }
  initItems(){
    this.onReload();
  }
  getItems(){
    return this.items.slice();
  }
  deleteItem(index:number){
    this.items.splice(index,1);
    this.itemsChanged.next(this.items.slice());
  }
  onDecrease(index : number){
    let q = this.items[index].qty  >= 1 ? this.items[index].qty - 1 : this.items[index].qty ;
    this.items[index].qty = q;
    this.itemsChanged.next(this.items.slice());
  }
  onIncrease(index : number){
    let q = this.items[index].qty +1;
    this.items[index].qty = q;
    this.itemsChanged.next(this.items.slice());
  }
}
