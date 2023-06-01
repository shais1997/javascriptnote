

/*for(let i=2; i<4; i++){
    console.log('Table of '+i)
    for(let j=1; j<11; j++)
   { console.log(i + 'x' + j +'='+ i*j)
   }
}*/
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}