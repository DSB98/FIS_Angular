import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/InputOutputDecorator/InputDecorator/product/product/product.module';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-consume-utility-service',
  templateUrl: './consume-utility-service.component.html',
  styleUrls: ['./consume-utility-service.component.css']
})
export class ConsumeUtilityServiceComponent implements OnInit {

  constructor(private _msgService : UtilityServiceService) {
    this.product=new Product();
   }

 
  productName : string = "";
  product : Product ;
  productList:Product[]=[];

  ngOnInit(): void {
    this.productName = this._msgService.ProductName;
    this.product = this._msgService.Product;
    this.productList = this._msgService.products;
  }
  btnClick(){
    // const msgSrv = new MessageService();
    // msgSrv.ShowMessage();
    this._msgService.ShowMessage();
    
  }

}
