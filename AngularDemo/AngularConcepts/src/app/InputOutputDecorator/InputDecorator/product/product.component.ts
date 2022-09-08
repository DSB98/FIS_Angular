import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Products";
  products =[
    {ProdID:'1',ProdName:'Laptop',ProdPrice:'25000.00'},
    {ProdID:'2',ProdName:'Jeans',ProdPrice:'25000.00'},
    {ProdID:'3',ProdName:'TShirt',ProdPrice:'25000.00'},
    {ProdID:'4',ProdName:'Bag',ProdPrice:'25000.00'},
    {ProdID:'5',ProdName:'Mobile',ProdPrice:'25000.00'}
   ]
}
