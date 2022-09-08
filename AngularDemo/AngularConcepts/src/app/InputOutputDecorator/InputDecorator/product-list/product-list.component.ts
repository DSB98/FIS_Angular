import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product/product/product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 

    // @Input() product:object;
    @Input() product:Product;

    constructor() {
      this.product=new Product();
     }
  


  ngOnInit(): void {
  }

}
