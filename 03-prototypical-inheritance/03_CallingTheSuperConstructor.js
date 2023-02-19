// ! Calling the super constructor

function Shape(color) {
  this.color = color;
}

// Circle.prototype.constructor = Circle;

// new Circle.prototype.constructor()
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

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

const s = new Shape();
const c = new Circle(10, "red");

// When we inspect c on the console and according to the inheritance point of view this circle object should have a color property and that should be initialized at the top of creating a Circle.
/**
 * 
    Circle {radius: 10}
    radius: 10
    [[Prototype]]: Shape
 */

// ? How do we do this?
//  Here in circle constructor we should call the "Shape" constructor.
// Now one easy way to do this which actually doesn't work is like this. function Circle(radius, ) {}
