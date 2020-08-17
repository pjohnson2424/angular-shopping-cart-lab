import { Injectable } from '@angular/core';
import {Item} from './interface';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  items: Item[];

  constructor(private http: HttpClient) { }
  apiURL: string= 'https://localhost:3000/cart-items'
  getAllItems(endPoint: string){
    return this.http.get(this.apiURL + endPoint)
}

/* deleteItem(id: number) {
  return this.http.delete(`${this.apiURL}/${id}`);
}

addItem(item: Item) {
  return this.http.post(`${this.apiURL}/${id}`); 
}

*/
}