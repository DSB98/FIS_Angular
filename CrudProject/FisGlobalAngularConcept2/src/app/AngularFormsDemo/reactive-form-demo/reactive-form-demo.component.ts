import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormArray, NgForm, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  genders = [
    { id: '1', name: 'Male' },
    { id: '2', name: 'Female' },
    { id: '3', name: 'Others' }

  ]
  myReactiveForm: any;

  constructor() { }


  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'UserDetails':new FormGroup({
      'name': new FormControl(null, [Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,15} [A-Z]{1}[a-z]{2,15}$")]),
      'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'mobile': new FormControl(null, [Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required)
      ])
    });

  }
  onSubmit()
  {
    console.warn(this.myReactiveForm)
  }
  OnAddSkills()
  {

    const control =
    new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);

  }
  OnRemoveSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt((<FormArray>this.myReactiveForm.get('skills')).length-1);
    
    
  }

}
