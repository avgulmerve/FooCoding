/*1*///1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

myString =myString.replaceAll(",", " ");

console.log(myString)

/*2*/ //2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);


favoriteAnimals.splice(1, 0, "meerkat")
console.log(favoriteAnimals);

console.log(`The array has a length of: ${favoriteAnimals.length}`)


const removed=favoriteAnimals.splice(3,1)
console.log(favoriteAnimals)

let findingIndex= favoriteAnimals.indexOf("meerkat")
console.log(findingIndex)
console.log(`The item you are looking for is at index: ${findingIndex}`)

/*3*/ //3. More JavaScript 🎉

/*3.1*/ //Create a function SUM

function sum(a,b,c) {
 return a+b+c
}
sum(3,2,1)

/*3.2*/ //Create a function COLOR
function colorCar(color) {
  console.log(`a ${color} car`)
}
colorCar("red")

/*3.3*/ // Create an object and a function

let user = {   
  name: "John",
  surname : "Doe",
  age: 30,
  location: "Malmö"};

function getPrint () {
  let cards ="";
  let values ="";
  for (let key in user){     
    cards +=key + ", "
    values+=user[key] + ", "
}
  console.log(cards)
  console.log(values)
}
getPrint(user)

/*3.4*/ //Create a function vehicleType

const vehicles = [ "car", "motorbike" , "bike"]
function vehicleType(color,type) {
        type=vehicles[type-1]
  console.log(`a ${color} ${type} `)
}

vehicleType("blue", 2)

/*3.5*/ // Can you rewrite

 /*if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}*/

console.log((3===3) ? "yes" : "no")

/*3.6*/ //Create a function called vehicle

function vehicle(color,type,age) {
  type=vehicles[type-1]
  if(age>2){
    return `a ${color} used ${type}`}
  else{
    return `a ${color} new ${type}`}
console.log(`a ${color} , ${type} , ${age} `) }

vehicle("blue",1,5)

/*3.7*/ //Make a list

vehiclesNewList= ["motorbike" , "caravan", "bike", "car" , "truck", "mopet" ]

/*3.8*/ //How do you get the third element?

thirdElement = vehiclesNewList[2];
console.log(vehiclesNewList)

/*3.9*/ //Change the function

function newVehicle(color,type,age) {
  type=vehiclesNewList[type-1]
  if(age>2){
    return `a ${color} used ${type}`}
  else{
    return `a ${color} new ${type}`}
console.log(`a ${color} , ${type} , ${age} `) }

newVehicle("green", 3, 1)

/*3.10*/ //Use the list of vehicles to write an advertisement

function getString () {
  vehicleString=""
  for(let i=0; i<vehiclesNewList.length-1; i++){
  vehicleString+= vehiclesNewList[i] + "s," + " " }
  return `Amazing Joe's Garage, we service ` +`${vehicleString}`+ `and ${vehiclesNewList[vehiclesNewList.length-1] + `s.`}`
  }

getString()


/*3.11*/ //What if you add one more vehicle to the list

//I add "mopet" the list , it's working

/*3.12*/ //Create an empty object.

const gameUser = { }

/*3.13*/ //Create an object TEACHERS THAT YOU HAVE HAD SO FAR
/*3.14*/ //Add a property

const mentor = {
  name : ["Tommy", "Sahin"],
  week : "2",
  languages : ["HTML and CSS", "JS"]
}
console.log(mentor)

/*3.15*/ // Write some code to test two arrays for equality 

function equalityArray(arrayOne, arrayTwo) {
  if(arrayOne === arrayTwo)
    return "arrays strictly equal"
  else
    if (arrayOne == arrayTwo)
      return "arrays almost equal"
    else
      return "arrays not equal"
}

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

equalityArray(x,y)
//JS can not see arrays elements
equalityArray(y,z)
//JS look their adresses same
equalityArray(x,z)
//JS look their adresses and looks different

/*3.16*/ //Take a look

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2 = { foo: "cafe"}
console.log(o3)
o1 = { foo: "restaurant"}
o1 = o3;
console.log(o3);
console.log(o1);
//let o2 = o3; //yes, the order is matter. Because we assign a value from rigth to left.


/*3.17*/

let bar = 42;
typeof typeof bar;

//return string. Because typeof return a string.
