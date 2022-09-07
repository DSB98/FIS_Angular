import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value:string):string {
    let newStr:string="";
    for(var i =value.length-1;i>=0;i++){
      newStr+=value.charAt(i);
    }
    return newStr
  }

  Name: string = "Deepak"
  today: number = Date.now();
  msg: string = "This is demo text"
  products = [
    { proimg: '', name: 'Laptop', id: 'pro01', price: 15000 },
    { proimg: '', name: 'Mobile', id: 'pro02', price: 8000 },
    { proimg: '', name: 'Led', id: 'pro03', price: 12000 },
    { proimg: '', name: 'Pen Drive', id: 'pro04', price: 20000 }
  ]

}
