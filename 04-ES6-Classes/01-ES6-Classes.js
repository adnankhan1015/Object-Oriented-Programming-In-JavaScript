// You have learned about objects and prototypical inheritance in JavaScript
// Now in ES6 os ES2015 which is like a modern version of javascript there is a new way to create objects and implement inheritance that's using CLASSES.
// But these classes are not like classes that we have in languages like C# and Java.
// They are essentially synthetic sugar over prototypical inheritance that is why I wanted to make sure you fully understand how prototypical inheritance works.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Draw");
//   };
// }

// const circle = new Circle(1);

// Here we have this constructor function that you have seen throughout the course. Now let's see how we can rewrite this code using ES6 classes.

// So we can create a class with the same name
// These classes are synthetic sugar over constructor functions.

class Circle {
  // This is the body of the class. In this body we can define properties and methods.
  // * One special method that we have is called constructor and we use that to initialize objects, just like the constructor function
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("Move");
    };
  }

  draw() {
    console.log("Draw");
  }
}

// * Now create circle object
const circleClassObject = new Circle(3);

// ! Now if you don't want a method to end up on the prototype then you need to define it in the constructor.

/* 
typeof Circle
'function'

*These classes are essentially functions, They are constructor functions

*/
