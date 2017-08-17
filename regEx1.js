// here we define simple regular expression
// two ways to define regular expressions
// not this tow regular expression are the same
// using slashes
let myRegEx = /na+me/gi;
// or using RegExp object
let myRegEx2 = new RegExp('na+me' , 'gi') ;

let myString = 'I naaame , people when meet me the call me naaaaaame , so I am Name' ;

// test method returns true if the regular expression in the string otherwise it returns false

// it should print false in the console
console.log(myRegEx.test(myString)) ;
console.log(myRegEx2.test(myString)) ;

// the replace method in the string object is used to replace the matched regExp with a new string
// this method returns  new string  and doesn't change the main string

let newString = myString.replace(myRegEx , 'Hala') ;
console.log(newString) ;
console.log(myString) ;
console.log(newString === myString) ;  // print false