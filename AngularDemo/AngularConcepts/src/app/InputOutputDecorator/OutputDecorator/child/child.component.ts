import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() message = new  EventEmitter();
  ngOnInit(): void {
  }
  getMessage(msg:string)
  {
    this.message.emit(msg);
   } 
}

