import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Shared/Services/http.service';
import { ShoppingCartService } from '../shared/Services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  landingData: Array<any> = [];

  constructor(private http: HttpService, private shopCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getLandingData();
  }

  getLandingData() {
    this.http.get('categories').subscribe((response: any) => {
      this.landingData = Object.entries(response)
    })
  }

  addToCart(item: any) {
    this.shopCart.addToCart(item);
  }
}
