import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uname:string="Enter Username"
  onInputClick(event:any){
console.log(event);
console.log(event.target.value);

  }

}
