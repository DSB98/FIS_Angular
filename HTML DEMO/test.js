// for(var x=1;x<=10;x++){//global
// console.log(x);
// }
// for(let x=1;x<=10;x++){} 
// //console.log(x);// It's having locally define

let firstName = 'Deepak';
let lastName = 'Baravkar';


let age = 999;
let birthDate = new Date();
console.log(firstName+" "+lastName)
let person = {
firstName : 'Deepak',
lastName: 'Baravkar'
}
console.log(person.firstName);
let duplicate = function(value){
    return value*2;
}

console.log(duplicate(5));

// //CONST

const person2 = {
    firstName : 'Deepak',
    lastName: 'Baravkar'
    }
person2.firstName = 'Deepak';
person2.firstName = 'Deeps'; // allow to when in array or object
const personName = 'Deepak Baravkar';
//personName = 'Deeps';//Assignment to constant variable.

console.log(personName);
//person2 = {} //Assignment to constant variable.

console.log(person2);