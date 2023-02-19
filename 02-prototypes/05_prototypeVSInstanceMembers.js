// ! Prototype v/s Instance Members

function Circle(radius) {
  // Instance Members
  this.radius = radius;

  this.move = function () {
    // ! So essentially what is happening here is we are calling the draw() method obviously its not an instance method.
    // this.draw();
    console.log("Move");
  };
  // this.draw = function () {
  //   console.log("Draw");
  // };
}

// const c1 = new Circle(1);
// const c2 = new Circle(2);

// * We have Circle constructor with 2 members radius property and the draw method

// inspect c1 object on the console > c1
// We have this radius method on the console
// With c2 we get the same result as well

// So, in the current implementation,
// Lets say if we have 1000 objects in the memory. We are going to have 1,000 copies of the draw method

// Now this is a very simplified example

// In a real world application your object might have several methods. So if you want to have a large number of objects in the memory. You are going to waste a lot of memory by keeping copies of all these methods in memory.

// ? So, What's the solution?
// * Well you know, How prototypical Inheritance works.

// When we access a property or a method on an object. JavaScript Engine first looks at the object itself if it can't find that property or method. It will look at the prototype of that object.

// So now, You can take this draw method out of the circle object and put it in it's prototype.
// We are going to have a single instance of this prototype in the memory which we call circleBase.

// So we are going yo have a single instance of the draw method.

// ? So, How we do that?
// Well, In the last lecture you learned that every constructor has a prototype property.
// So Circle.prototype and this is exactly the same as prototype of our circle object.

// So for c1.
// Lets say if you access the prototype(__proto__) property which we shouldn't call because its deprecated

// * Circle.prototype(i) === c1.__proto__ (ii) it returns true

// * But essentially (i) and (ii) these 2 properties are referencing the same object in memory
// * That's the "circleBase"

// So using Circle.prototype we can quickly access this object.

// ! NOTE: So you know JavaScript Objects are dynamically. So we can always add something to them later. So we can add draw method here(circleBase)

const c1 = new Circle(1);
const c2 = new Circle(2);

// Prototype Members
Circle.prototype.draw = function () {
  // ! We shouldn't call instance methods here because otherwise we will have the circle dependency.
  //   this.move();
  console.log("Draw");
};

// On console we have object has a radius property and the draw method is on the prototype the circleBase Object. (same is true for c2)

// Now because of prototypical inheritance we can still access it. > c1.draw()

// So essentially we have 2 kinds of properties and methods in JavaScript.
// ! 1. Instance properties and methods (Instance Members)
// ! 2. Prototype properties and methods (Prototype Members)

// * Now lets take this to the next level

// So you know that every object has that toString method => c1.toString()  => By default it returns this string '[object Object]'

// We can overwrite this implementation of this method in the prototype of our circle object

// So here I am going to add.
// This is the new implementation for the toString method
// Circle.prototype.toString = function () {
//   return "Circle with radius " + this.radius;
// };

// JavaScript Engine looks at our circle object obviously we don't have this method there, then it looks at it's prototype.

// Even though we have another implementation of the toString method in objectBase.
// But this implementation will be used because this is more accessible
// ! Note: So this is all about instance vs prototype members

// * we have Circle object with 2 instance members radius and move and one prototype member which is called draw

// Now one thing I want to emphasize here is that it doesn't matter when you change the prototype. So in this case we are modifying the prototype before creating an object.

// You can create an object first and then modify the prototype

// The draw method will still be available on the circle object. e.g > c1.draw()
// Because here we are dealing with object references. So you have a single object in memory, as soon as we modify that all the changes are immediately visible

// ? How to iterate over instance vs prototype properties?

// So earlier you learned about Object.keys() method in its argument we pass the object e.g c1

// Return Instance Members
console.log(Object.keys(c1));

// Object.keys() method only returns the instance members ['radius', 'move']
// Draw is not there because draw is a prototype member
// So  that is something I want you to remember. So Object.keys() only returns the instance members

// ? What about for...in loop?

for (let key in c1) {
  console.log(key);
}

// * Returns all members (instance and prototype members)

// > on console we have all the instance and prototype members
// ! NOTE: So remember the for...in loop returns all the members.

// NOW in javascript language we often use the word "OWN" instead of instance

// So in some documents or in some tutorials you may hear OWN Properties vs Prototype Properties.

// Let me show you a useful method
// ! On console
// c1.hasOwnProperty('draw')
// false
// c1.hasOwnProperty('move')
// true

// ! AVOID Extending The built-in Objects":

// Array.prototype.shuffle = function() {

// }

// ! Do not modify OBJECTS you do not OWN
// JavaScript is a dynamic language it makes it easy to add properties and methods to the existing object but that doesn't mean that you should modify the built-in objects
