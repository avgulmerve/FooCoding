/*10*/ //Write a program to answer the following questions:

//10.1 Can you store multiple types in an array? Numbers and strings? Yes.


cozy_array = ['John', 2, 'Jane', true]
console.log(cozy_array)


//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?

let g=0; 

if (isFinite(1000 / g)) {
  console.log("Number is NOT Infinity.");
}
else {
  console.log("Number is Inifinity");
}
