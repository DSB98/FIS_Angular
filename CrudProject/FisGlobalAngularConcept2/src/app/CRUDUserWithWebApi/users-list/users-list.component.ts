import { Component, OnInit } from '@angular/core';
import { UserCrudServiceService } from '../user-crud-service.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userservice: UserCrudServiceService) { }
  collection: any = [];
  ngOnInit(): void {
    this.userservice.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }
  deleteUser(id:any) {
    //Note : This data we have delete it from collection array also.
    this.collection.splice(id , 1)
    this.userservice.DeleteUser(id).subscribe((result) => {
      console.warn(result)
    })
  }

}
