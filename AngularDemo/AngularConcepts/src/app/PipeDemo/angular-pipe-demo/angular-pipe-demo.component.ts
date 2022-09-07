import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe-demo',
  templateUrl: './angular-pipe-demo.component.html',
  styleUrls: ['./angular-pipe-demo.component.css']
})
export class AngularPipeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
todayNumber:number=Date.now();
todayDate:Date=new Date();
todayString:string=new Date().toDateString();
todayISOString:string=new Date().toISOString();

Name:string="Deepak";
today:number=Date.now();
msg:string="This is demo text";




products=[
  {id:"pro1001",proimg:"",name:"Laptop",price:15000},
  {id:"pro1002",proimg:"",name:"Tablet",price:10000},
  {id:"pro1003",proimg:"",name:"SmartPhone",price:15000},
  {id:"pro1004",proimg:"",name:"Liandline",price:5000},
  {id:"pro1005",proimg:"",name:"Ipod",price:25000}
]
myobject=[];
}
