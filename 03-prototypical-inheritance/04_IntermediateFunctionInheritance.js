// ! Intermediate Function Inheritance
// So we have setup our inheritance chain properly
// Now lets create another object like a square that inherits from Shape
// ! Calling the super constructor
// As we define multiple objects this logic gets in the wy and chances are we might make a mistake a long the way.

// ! Creating an extend function
// So lets refactor this code and extract these two lines into a function that we can reuse.

// SO here I am going to define a function called "extend" that takes to parameters: 1. Child and 2. Parent and note that here first letter if this parameter is uppercase, because I am expecting these to be constructor functions.

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

extend(Circle, Shape);

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // We don't want to use the new operator here, Because this will create another new object and set the "color" property on that object.
  // ! So to fix this problem, we need to call the shape function and set "this" to point to the new instance of the circle object.
  // * So this is how you call the super constructor
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("Draw");
};

Circle.prototype.duplicate = function () {
  console.log("Duplicate");
};

function Square(size) {
  this.size = size;
}

// Now we want this square to inherit from Shape
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

extend(Square, Shape);

const s = new Shape();
const c = new Circle(10, "red");
const sq = new Square(5);
