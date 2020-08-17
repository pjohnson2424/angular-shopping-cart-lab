import { Component } from '@angular/core';
import {Item} from './interface';
import {CartApiService}  from './cart-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
}
