// ! You have learned that every object in JavaScript except the root object has a prototype or a parent.
// Now the proper way to get the prototype of an object is using e.g > Object.getPrototypeOf(Object) (Here we pass an object)
// and what we get here is exactly what we saw oon the console.

let person = {
  name: "Davis",
};

const objectBase = Object.getPrototypeOf(person);
// myObj.__proto__(Parent of person Object)
console.log(objectBase);

// ! NOTE! One thing that you need to know is that constructor also have a prototype property.
// So here we have the circle constructor function and you now that in JS functions are objects so they have properties and methods

function Circle(radius) {
  this.radius = radius;
}

// Circle. With Circle. these are all the properties and methods that are available in every function so here is the prototype property

const circle = new Circle(1);

// Circle.prototype
// ? What is this?
// * This is the object that will be used as the parent for objects created by a circle constructor.

// Constructor.prototype

// Assuming that we have this person object and this is person object is created by this constructor e.g >Constructor.prototype.
// * This constructor has a prototype property and what we get in the prototype of the constructor, is exactly what we have in objectBase

// ! So the object that will be used as the parent for objects() created by this constructor.
