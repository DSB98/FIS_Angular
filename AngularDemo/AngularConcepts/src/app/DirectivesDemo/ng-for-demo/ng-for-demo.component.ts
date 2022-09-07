import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {id:"pro1001",proimg:"",name:"Laptop",price:15000},
    {id:"pro1002",proimg:"",name:"Tablet",price:10000},
    {id:"pro1003",proimg:"",name:"SmartPhone",price:15000},
    {id:"pro1004",proimg:"",name:"Liandline",price:5000},
    {id:"pro1005",proimg:"",name:"Ipod",price:25000}
  ]
  myobject=[];
}
