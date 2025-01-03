import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Shared/Services/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private rout: ActivatedRoute, private http: HttpService) {
      rout.queryParams.subscribe(res => {
        console.log(res)
      });
    }

  ngOnInit(): void {
  }

}
