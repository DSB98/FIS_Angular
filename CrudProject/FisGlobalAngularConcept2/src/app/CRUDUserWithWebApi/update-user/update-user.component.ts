import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormBuilder } from '@angular/forms';
import { UserCrudServiceService } from '../user-crud-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  alert: boolean = false;
  myReactiveForm: any;

  constructor(private router: ActivatedRoute, private userservice: UserCrudServiceService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.userservice.GetUser(this.router.snapshot.params['id'])
      .subscribe((result:any) => {
        console.warn("result",result)
        this.myReactiveForm = new FormGroup({
          // 'UserDetails': new FormGroup({
          'name': new FormControl(result['name'], Validators.required),
          'username': new FormControl(result['username'], Validators.required),
          'email': new FormControl(result['email'], [Validators.required, Validators.email]),
          //}),
          'phone': new FormControl(result['phone'], [Validators.required, Validators.pattern("^[6-9]{10}$")]),
          'website': new FormControl(result['website'], Validators.required)
        });
      })

    
  }
  onSubmit() {
    // console.log(this.myReactiveForm.value)
    this.userservice.UpdateUser(this.router.snapshot.params['id'],this.myReactiveForm.value).subscribe((result) => {
      // console.warn("Data submitted successfully", result)
      // alert("Data submitted successfully " + result)
      this.alert = true
      this.myReactiveForm.reset({})
    })

  }
  closeAlert() {
    this.alert = false
  }

}
