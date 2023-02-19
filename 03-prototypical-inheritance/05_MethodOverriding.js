// ! Method Overriding

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("Draw");
};

// c.duplicate() we get duplicates on the console.
// * Now sometimes as you work with inheritance you may face a situation where this implementation that you have defined in a parent Object(may not work or may not be ideal in a child Object)
// So let's imagine! this parent algorithm for duplicating a shape works, or most of the shape object but maybe it should behave differently than circle objects.

// ? What should we do?
// * That's when we use method override. So we override a method that is defined in the base object. All we have to do is redefined the duplicate method in the circle object.

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate Circle");
};
// ! Note: Its very important to put this after the extending the circle because at this point we are resetting the prototype.

const s = new Shape();
const c = new Circle(10);
