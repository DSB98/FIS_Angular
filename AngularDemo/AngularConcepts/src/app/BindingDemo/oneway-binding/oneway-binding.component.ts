import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //one way data binding
  //data binding=communication
  //ts(component)==>html(view)

  dynamicName: string = "Deepak";
  myMethod() {
    return "This is data binding in angular by " + this.dynamicName;
  }

  appStatus: boolean = true;
  status1: string = "Online";
  status2: string = "Offline";
  enable: boolean = true;
  msg: string = "";
  onAddCart() {
    this.msg = "Product add to cart";
  }
  onInputClick(event: any) {
    console.log(event)
  }
  myStyle = {
    'background': 'red',
    'border': '10px solid green'
  }

  mltClasses = {
    class1: true,
    class2: true,
    class3: false
  }

}
