/*1*/ // Write a console.log statement saying "Hello World!" for each language that you know
console.log("Hello world!");
console.log("Merhaba Dünya!");
console.log("Hej Hej");

/*2*/ //Consider the following code:
//console.log('I'm awesome');
// the error is using the same qoute in the string. Solution is:

console.log("I'm avesome");

/*3*/ //Declare a variable x and initialize it with an integer, using these exact steps:
let x;
console.log("the value of my variable x will be: my old city registiration number");
console.log(x);
x = 34;
console.log("the value of my variable x will be: my old city registiration number");
console.log(x);

/*4*/ //Declare a variable y and assign a string to it.
let y="Almira";
console.log("My nephew name is");
console.log(y);
y="Alin"
console.log("My nephew name is");
console.log(y);

/*5*/ //How do you round the number 7.25, to the nearest integer (i.e., whole number)?
let z = 7.25;
console.log(z);
a= z.toFixed(0);
console.log(a);
if( z>a) 
  theHighestValue = z;
else
  theHighestValue=a;
console.log(theHighestValue);

/*6*/ //Arrays
let favoriteMeals = [];
console.log("My favorite meals are");
console.log(favoriteMeals);
const favoriteAnimals = ['cats', 'dogs', 'penguins'];
console.log (favoriteAnimals);
let DaanFavoriteAnimal = "babypig";
favoriteAnimals.unshift('baby pig');
console.log(favoriteAnimals)

/*7*/ //More strings
const myString = "this is a test"
console.log(myString);
myString.length;
console.log(myString.length);

/*8*/ //Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
a = 8;
console.log("The value of my variable a is: " + a);
b = "biscuits";
console.log("The value of my variable b is: " + b);
c = true;
console.log("The value of my variable c is: " + c);
d = ['Jane' , 'John']
console.log("The value of my variable d is: " + d);
e = 9;
console.log("The value of my variable e is: " + e);
console.log("The typeof my variables are: " + "number, string, boolean and array" );
typeof(a);
typeof(b);
typeof(c);
typeof(d);
if (typeof(a)===typeof(b) || typeof(a)===typeof(c) || typeof(a)===typeof(d) || typeof(a)===typeof(e))
  console.log ("SAME TYPE");
else 
  if (typeof(b)===typeof(c) || typeof(b)===typeof(d) || typeof(b)===typeof(e))
  console.log ("SAME TYPE");
else if (typeof(c)===typeof(d) || typeof(c)===typeof(e))
   console.log ("SAME TYPE");
else if
  (typeof(d)===typeof(e))
  console.log ("SAME TYPE");

/*9*/ //If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

let r=7;
r=r%3;
console.log(r);

let p=10
p=p%5
console.log("new p variable is equal remaining of ten division five: " + p)

z=20;
if(z%2==0)
  console.log("z is even");
else
  console.log("z is odd");

f=25;
if(f%5==0)
  console.log("f is multiple of 5")
else
  console.log("f is not multiple of 5")

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
