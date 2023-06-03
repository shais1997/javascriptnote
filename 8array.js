/*let i;
let arr=['red', 'green', 'blue']
for(i=0; i<arr.length; i++){
    console.log(arr[i])
}
// so here we recall the declaration of array and use for loop for array's data

//function that takes an array as input and display all items of this array

function arraT(as){
    for(i=0; i<as.length; i++){
        console.log(as[i])
    }
}

let colors=['red','greem','boue']
arraT(colors)


*/

function letterFinder(word, match){
    for(var i=0; i<word.length; i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test","t")
