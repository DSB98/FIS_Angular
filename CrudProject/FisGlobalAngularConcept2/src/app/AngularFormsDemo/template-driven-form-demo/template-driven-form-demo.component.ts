import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent implements OnInit {

  genders=[
    {id:'1',name:'Male'},
    {id:'2',name:'FeMale'},
    {id:'3',name:'Other'}
  ];

constructor() { }

ngOnInit() {
}
@ViewChildren("myForm") public mytempForm : NgForm | any;

defaultCourse : string= "Angular";
name:string="";
email : string="";
mobile : number=0;
defaultGender="Male";

onSubmit(form:NgForm) // Now this will automatically create the form object 
{
console.log(this.mytempForm); 
}


}
