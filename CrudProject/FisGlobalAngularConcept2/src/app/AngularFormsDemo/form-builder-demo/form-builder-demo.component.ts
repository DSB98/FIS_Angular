import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.css']
})
export class FormBuilderDemoComponent implements OnInit {
  myFormBuilder : any; //FormGroup;
  genders=[
    {id:'1',name:'Male'},
    {id:'2',name:'FeMale'}
  ];
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
    this.myFormBuilder = this.fb.group({
    UserDetails : this.fb.group({
     name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
     email : ['',Validators.required],
      }),
     mobile : ['',Validators.required],
     course : [''] ,
     gender:[''],
     });
  }

  onSubmit(){
    console.log(this.myFormBuilder)    
     }


}
