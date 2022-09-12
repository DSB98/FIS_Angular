import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormBuilder } from '@angular/forms';
import { UserCrudServiceService } from '../user-crud-service.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  alert: boolean = false;
  myReactiveForm: any;
  constructor(private userservice: UserCrudServiceService) { }

  ngOnInit(): void {
    this.alert = false;
    this.myReactiveForm = new FormGroup({
      // 'UserDetails': new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      //}),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      'website': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    // console.log(this.myReactiveForm.value)
    this.userservice.postUser(this.myReactiveForm.value).subscribe((result) => {
      // console.warn("Data submitted successfully", result)
      // alert("Data submitted successfully " + result)
      this.alert = true
      this.myReactiveForm.reset({})
    })
    

  }
  closeAlert()
  {
    this.alert = false
  }
}
