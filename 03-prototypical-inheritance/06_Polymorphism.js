// ! Polymorphism
// * Poly means many and morph form. So polymorphism means many forms.
// * It is an extremely powerful technique in OOP.

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

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate Circle");
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("Duplicate Square");
};

// So Basically, What we have now is a simple hierarchy on the top we have the Shape and then we have two derivatives or child objects. (Circle and Square).
// ! Each object will provide a different implementation of the duplicate method.
// * So we have many implementations or many forms of the duplicate method.
// * That's what we call POLYMORPHISM.
// ? Why is this so powerful?
// Lets imagine we have an array of Shape objects. and in this array I am going to add 2 objects A circle and a square.

const shapes = [new Circle(10), new Square()];

// * Now we can iterate over this array using for...of loop

for (let shape of shapes) {
  shape.duplicate();
}

// * Depending on the type of the shape object
// 1. A different implementation
// or a different form of the duplicate method will be called.
// ! Comment out the object we created separately.
// const s = new Shape();
// const c = new Circle(10);

// * So if shape is a circle, the implementation of duplicate in the circle object will be called.
// * If its a square, the implementation of duplicate in the square object will be called

// ? Why is this so powerful?
// * Before OOP if you wanted to implement this logic we will have to write code like this.
// So in this loop we will have to check the type of each object.
// Lets say, shape.type if it's a circle then perhaps we will have function somewhere else, like duplicateCircle
// We will have to call that function.
// ! Now this function is not part of any object.
// * This is the non-object oriented way of writing code.
for (let shape of shapes) {
  if (shape.type === "Circle") {
    duplicateCircle();
  } else if (shape.type === "Square") {
    duplicateSquare();
  }
}

// * In OOP we encapsulate our variable and function in a single object.

// * In contrast, When we encapsulate variable and function into object and use inheritance, we can execute many forms of a method. using single line of code.

// ! So instead of all this I would call
for (let shape of shapes) {
  shape.duplicate();
}

// * So that's POLYMORPHISM in ACTION
