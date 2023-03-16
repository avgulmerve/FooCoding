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
