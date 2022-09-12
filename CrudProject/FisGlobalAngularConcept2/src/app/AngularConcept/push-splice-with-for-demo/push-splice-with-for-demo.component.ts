
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-splice-with-for-demo',
  templateUrl: './push-splice-with-for-demo.component.html',
  styleUrls: ['./push-splice-with-for-demo.component.css']
})
export class PushSpliceWithForDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [{'name':''}];

  onCreateUser(uname: any) {
    this.users.push({
      name : uname.value
    })
  }
  OnRemoveUser() {
    this.users.splice(this.users.length - 1);
  }

  OnRemoveItem(item: any) {
    this.users.splice(item, 1); //if you want to delete two item , pass 2 in place of 1

  }

}
