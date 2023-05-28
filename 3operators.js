/*three types of operator 
1 ==>> arithmatic operators + - * / %
2 ==>> conditional operators > < == !=
3 ==>> logical operators  '&&/and check both conditioin are true example a>5&&a<10'
                          '||/or check atleat one condition true example a>5||a==5'
                          '!/not operator return false if condition true example !(a>5)*/
let a = 9
let c = 3
console.log(a*c) 
console.log(a%c)
console.log(a/c)

if(a>3){
    console.log('hellow world')
}
if(a>8 && a<10){
    console.log('it is 9')
}