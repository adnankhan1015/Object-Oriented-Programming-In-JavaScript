// ! Static Methods
/*
    In Classical Object Oriented Languages we have 2 types of methods
    * 1. Instance methods
    * 2. Static methods
*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // * Instance method=> Because this method is available on an instance of a class(which is an object)
  draw() {
    console.log("Draw");
  }
}

// SO if we create a circle object here with the "circle" and radius 1 and log it on the console

const circle = new Circle(2);
console.log("Circle", circle);
// So in the circle object in this instance we have the draw method

// * In contrast, we have "Static methods" that are available on the class itself Not on the object instance.
// We often use them to create utility functions that are not specific to a given object.

// e.g In the circle class this draw method is specific to a circle object. It is particularly circle object that we want to drop so that's why its an instance method.

// ! But here I can define a static method that is not tied to a particular circle object
