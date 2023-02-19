// ! Resetting the constructor

// Now there is a tiny problem with this implementation:

function Shape() {}

// Circle.prototype.constructor = Circle;

// new Circle.prototype.constructor()
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("Draw");
};

Circle.prototype.duplicate = function () {
  console.log("Duplicate");
};

const s = new Shape();
const c = new Circle(10);

// ! Earlier we have discussed that every object in JavaScript has a constructor property that returns a function that was used to construct or create that object

// * 1. new Circle(10);
// * 2. new Circle.prototype.constructor(1)
// ! 1 and 2 are exactly the same
// referencing number 1 implementation, Because its shorter and cleaner, but in some rare circumstances you may get a constructor function.
// Somewhere in your application and you may want to dynamically create an object based on that constructor function.

// ! referencing number 2 implementation: So there you can access the prototype property and from there you get the constructor and then use the new operator.

// ! Now lets see what happens when we uncomment line 7
