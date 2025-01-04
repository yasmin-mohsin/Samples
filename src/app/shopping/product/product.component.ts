import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Shared/Services/http.service';
import { ShoppingCartService } from '../shared/Services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: any;
  type: any;
  productData: any;

  constructor(private rout: ActivatedRoute, private http: HttpService, private shopCart: ShoppingCartService) {
    rout.queryParams.subscribe(res => {
      this.productId = Number(res['index'])
      this.type = res['type']
    });
    this.getProductData()
  }

  ngOnInit(): void { }

  // USAGE => get product data form local storage
  getProductData() {
    this.http.get(`categories/${this.type}/${this.productId}`).subscribe(response => {
      this.productData = response;
    })
  }

  // USAGE => use to add this selected item to cart throw local storage
  addToCart() {
    this.shopCart.addToCart(this.productData);
  }
}
