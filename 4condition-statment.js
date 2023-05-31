/*

on the basis of condition statment will be run example if condition is true than statment execute
other else statement will be execute

sometime we single condition statement sometime we have multiple condition statement  

*/

// single condition statement

let country='pakistan'
if(country='pakistan'){
    console.log('asian country')
}else{
    console.log('not know')
}
//exercise
let age=10;
if(age>=65){
console.log("You get your income from your pension")
}else if(age<65 && age>=18){
console.log( "Each month you get a salary")
}else if(age<18){
console.log("You get an allowance")
}else{
console.log("The value of the age variable is not numerical")
} 


let day='sunday'
switch(day){
case 'monday':
console.log('do something')
breake;
case 'tuesday':
console.log('do something')
break;
case 'wednesday':
console.log('do something')
breake;
case 'thursday':
console.log('do something')
break;
case 'friday':
console.log('do something')
break;
case 'saturday':
console.log('do something')
break;
case 'sunday':
console.log('funday');
break;
default:
console.log('there is no such day')
}