// ! Static Methods
/*
    In Classical Object Oriented Languages we have 2 types of methods
    * 1. Instance methods
    * 2. Static methods
*/

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   // * Instance method=> Because this method is available on an instance of a class(which is an object)
//   draw() {
//     console.log("Draw");
//   }
// }

// SO if we create a circle object here with the "circle" and radius 1 and log it on the console

// const circle = new Circle(2);
// console.log("Circle", circle);
// So in the circle object in this instance we have the draw method

// * In contrast, we have "Static methods" that are available on the class itself Not on the object instance.
// We often use them to create utility functions that are not specific to a given object.

// e.g In the circle class this draw method is specific to a circle object. It is particularly circle object that we want to drop so that's why its an instance method.

// ! But here I can define a static method that is not tied to a particular circle object

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // * Instance method=> Because this method is available on an instance of a class(which is an object)
  draw() {
    console.log("Draw");
  }

  // * Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(2);
console.log("Circle", circle);

// So here we won't have circle.parse()

// * BUT it's accessible on the class reference so "Circle.parse()"

// * Explanation of static method
// Parse method takes a string, which is supposed to be JSON string. It will "Parse" it and return a new circle object. Now to make this a static method we use the "static" keyword on the front and with this, this method will no longer be available on a circle object.
// So, with this method we are not working with a particular circle object, we are working with a circle class itself. So to call static method we don't have to create an instance of this class.\

/*
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  * JSON.parse(str); here we get the JSON object. as you may know this is a valid JSON object and it has a a radius property we can get that, store it in a constant and then new up a circle object with that radius, and return it.
  
 */

// Now with this method we don't have to create a circle object first because we don't have a circle object to start with, we have a JSON string.
// So call it Circle.parse() and pass a valid json object here. With this key, radius and set the value to 1

/*
 * const circle = Circle.parse('{"radius":1}')
 * console.log(circle)
 * Now this static method returns a Circle object
 */
const staticCircle = Circle.parse('{"radius":1}');
console.log(staticCircle);

// * SO one more time, we use static method to create utility functions that are not tied to a particular object.

class Math2 {
  static abs(values) {
    console.log("ABS Method");
  }
}

const mathObject = new Math2();
