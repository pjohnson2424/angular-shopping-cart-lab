import { Component, OnInit } from '@angular/core';
import { Item } from '../interface';
import { CartApiService } from '../cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

constructor( private cartService:CartApiService) { }

title: string = 'Shopping Cart'
apiURL: any= "http://localhost:3000/cart-items";
data: Item[];
items: Item[];
editItemForm: boolean = false;
newItemForm: boolean = false;

ngOnInit(): void {
     this.cartService.getAllItems().subscribe((data :Item[])=>{
       this.items = data;
       })
  }

delete(id) {
  console.log('I WAS CLICKED!');
  this.cartService.deleteItem(id).subscribe(()=>{
    this.items.splice(id,1);
    return id;
  })
}

addItem(item) {
  let newItem: Item = {
    id: this.items.length+1,
    product: item.value.product,
    price: item.value.price,
    quantity: item.value.quantity
  };
  this.cartService.addItem(newItem).subscribe(()=>{
    this.items.push(newItem);
    return newItem;
  })
}

createForm= () => {
  if (this.editItemForm) {
    this.editItemForm = false;
  }
  (this.newItemForm) ? this.newItemForm = false : this.newItemForm = true;
}

}
