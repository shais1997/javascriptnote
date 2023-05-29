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

/*more example of operator 

=== strick equality operator ===

value and data type both are equal than retutn true otherwise false

5===5 return true results
but
5==='5' return false because data type are not equal 

on other hand 

5==5 return true
5=='5' also return true 

same above logic implement on !== strickly not equal to operator



*/