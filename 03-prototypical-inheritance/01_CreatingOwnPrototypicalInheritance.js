// ! Module 4 Prototypical Inheritance

// * Creating your own Prototypical Inheritance
// So here we have a circle object with a radius property and two methods that are defined on its prototype.

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.draw = function() {
//     console.log('Draw')
// }

// Circle.prototype.duplicate = function() {
//     console.log('Duplicate')
// }

// You have the draw and duplicate methods defined on the prototype of the circle object.

// Now lets imagine tomorrow we are going to add a square object here and that square object should also have a duplicate method with the exact same implementation. we don't want to repeat this implementation.

// In other words, we don't want to define a square constructor and then redefine the duplicate method on the prototype of this constructor.

function Square() {}

// ! We don't want to do this...
// Square.prototype.duplicate = function() {
//     console.log('Duplicate')
// }

// Instead
// * We want to use inheritance so we want to define a shape object and put this duplicate method here and then have circle and square inherited from the same object.

// So we don't want the duplicate method on the prototype of the shape object.
// Because once you learn how to inherit a circle from a shape, you can easily have square inherit from shape.

// Define a shape constructor.
function Shape() {}
// * So we want a new circleBase object that inherits from shapeBase instead of objectBase.
// So this returns an object that inherits from shapeBase.
// Now all we have to do is use this object as the prototype of our circle.
// so Reset circle.prototype to this new object

// ! So before this line our circleBase or circle prototype was like this: Circle.prototype = Object.create(Object.prototype)
// Was an object that inherited Object,prototype which we call ObjectBase
Circle.prototype = Object.create(Shape.prototype);
// Next we want to move this duplicate method to the prototype of the shape object.
Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

// Define a circle constructor.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("Draw");
};

Circle.prototype.duplicate = function () {
  console.log("Duplicate");
};

// Now lets define two objects here:
// One is a shape
// Other is a circle

const s = new Shape();
const c = new Circle(10);

// In JS we have a method for creating an object with a given prototype.
// ! After the shape constructor
