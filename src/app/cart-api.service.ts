import { Injectable } from '@angular/core';
import {Item} from './interface';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  items: Item[];
  constructor(private http: HttpClient) { }
  apiURL: string= "http://localhost:3000/cart-items"


getAllItems(){
    return this.http.get(this.apiURL);
}

deleteItem(id: number){
  return this.http.delete(`http://localhost:3000/cart-items/${id}`, {responseType: "json"});
}

addItem(item: Item) {
  return this.http.post("http://localhost:3000/cart-items", {newItem: item}, {responseType: "json"});
}

}

