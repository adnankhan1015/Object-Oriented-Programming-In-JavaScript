// ! Modules
/* 
    In all the examples so far, we have written all the code inside of one file.
    But that's not how we build real world applications.
    Because we do not want to have one gigantic file with hundreds of lines of code. That's hard to maintain.

    * We should split our code into multiple files, and we call each of these files a module. 
    ! Modularity
    * This gives us a number of benefits 
    * 1. Maintainability: Is that we can increase the "maintainability" of our application because our code is better organized.
    * 2. REUSE: Is that we get the chance to reuse one or more of these modules in different parts of an application or in different applications.
    * 3. ABSTRACT: Is that we can abstract code so we can apply abstraction principle which means we can hide some of the complexity in a module, and only expose the essential methods.
*/

/* 
    ! Example:
    * We wrote this code to implement a private property in our circle class.
    * We have this _radius which is a WeakMap() and we are using that inside our circle class to implement a private property.
    * So here, when we create object we don't have access to a radius properties this => 
    const c = new Circle(2);
    c.radius // we don't have access to a radius properties this
*/

const Circle = require("./circle");

const c = new Circle(10);
c.draw();

// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   draw() {
//     console.log("Circle with radius " + _radius.get(this));
//   }
// }

// const c = new Circle(33);
// c.draw();
// console.log(_radius.get(c));
/* 
    Here I can call radius.get and pass the circle object as the key and what is returned will be the value of the radius property.

    ? Now, What should we do here?
    * Take this circle class and the radius WeakMap() out of this file.
    * Put it in a separate file which we call a module.
    * and then only expose the circle class to the outside.
    * So we can import file here
    * Create the circle object
    * But we will not have access to this _radius object (Which is our WeakMap()
    
    ! So this is abstraction in action.
*/

// ! History of Modules in JavaScript
/* 
    In ES5 we didn't have the concept of modules. So different solutions emerged to solve this problem.
    Developers in the community introduced new syntaxes to define modules
    We refer to these syntax as module formats
    ! Popular Module formats we have
    * 1. AMD (Browser) Asynchronous Module Definition
    * 2. CommonJS (NodeJS) 
    * 3. UMD (Browser/Node.js) Universal Module Definition
    * 4. ES6 Modules
    * So we used these module formats in ES5. But as of ES6 JavaScript Native supports a module format
*/
