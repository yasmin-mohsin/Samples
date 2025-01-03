import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Shared/Services/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryType!: string;
  products!: any;

  constructor(private rout: ActivatedRoute, private http: HttpService) {
    rout.queryParams.subscribe(res => {
      this.categoryType = res['type']
      this.getProductList();
    });
  }

  ngOnInit(): void {
  }


  getProductList() {
    this.http.get(`categories/${this.categoryType}`).subscribe(response => {
      this.products = response;
    })
  }
}
