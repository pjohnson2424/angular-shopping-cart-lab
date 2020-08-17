import { Component, OnInit, Input } from '@angular/core';
import {Response,Item} from '../interface';
import {CartApiService} from '../cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() item:any;

  constructor( private cartService:CartApiService) { }

   ngOnInit(): void {
     this.cartService.getAllItems(this.apiURL).subscribe((data :Response)=>{
       this.items = data.results })
  }

  title = 'Shopping-Cart - get items from API'
  apiURL: string= 'https://localhost:3000/cart-items';
  items: any[];

/*   getAllItems():void {
    this.cartService.getAllItems()
    .subscribe(response => this.items = response.items);
  } */


 
}
