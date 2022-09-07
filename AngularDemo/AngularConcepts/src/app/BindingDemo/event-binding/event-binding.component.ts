import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textMessage: string = ""
  msg: string = ""
  info: string = ""
  AddtoCart() {
    this.msg = "Product added to cart"
  }
  AddtoCart2(event?: MouseEvent) {
    this.msg = event ? (event.target as HTMLElement).innerHTML + " Added in cart":""
  }
  onChnageEvent(event:any){
    console.log(event)
    this.textMessage=event.target.value;
  }

  getInputInfo(inputInfo:any){
    this.info=inputInfo.value;
  }
}
