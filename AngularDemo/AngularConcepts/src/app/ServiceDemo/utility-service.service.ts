
import { Injectable } from '@angular/core';
import { Product } from '../InputOutputDecorator/InputDecorator/product/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
  constructor() { }
  ProductName = "Laptop";
  ShowMessage() {
    alert("You want to know more about services : I am for Utility Sevrice");
  }
  Product = { ProdID: '1001', ProdName: "Laptop",ProdPrice:'25000.00' }

  products = [
    {ProdID:'1',ProdName:'Laptop',ProdPrice:'25000.00'},
    {ProdID:'2',ProdName:'Jeans',ProdPrice:'25000.00'},
    {ProdID:'3',ProdName:'TShirt',ProdPrice:'25000.00'},
    {ProdID:'4',ProdName:'Bag',ProdPrice:'25000.00'},
    {ProdID:'5',ProdName:'Mobile',ProdPrice:'25000.00'}
  ];

}

