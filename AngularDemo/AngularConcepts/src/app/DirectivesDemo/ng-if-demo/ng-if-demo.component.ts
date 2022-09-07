import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isValid:boolean=false
  onCreateBlock(){
    this.isValid=true;
  }
}
