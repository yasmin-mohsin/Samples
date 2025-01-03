import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Shared/Services/http.service';
import { ShoppingCartService } from '../shared/Services/shopping-cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryType!: string;
  products!: any;

  constructor(private rout: ActivatedRoute, private http: HttpService, private shopCart: ShoppingCartService) {
    rout.queryParams.subscribe(res => {
      this.categoryType = res['type']
      this.getProductList();
    });
  }

  ngOnInit(): void { }

  // USAGE => get product list according to type from api
  getProductList() {
    this.http.get(`categories/${this.categoryType}`).subscribe(response => {
      this.products = response;
    })
  }

  // USAGE => use to add new item to cart and local storage
  addToCart(item: any) {
    this.shopCart.addToCart(item);
  }
}
