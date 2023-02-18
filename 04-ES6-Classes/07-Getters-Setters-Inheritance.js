// ! Getters and Setters
// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(value) {
//     if (value <= 0) throw new Error("Invalid radius");
//     _radius.set(this, value);
//   }
// }

// const c = new Circle(1);

// ! Inheritance

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("Move");
  }
}

// Now we have this circle inherited from shape
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("Draw");
  }
}

const c = new Circle("red", 3);

// So don't have to reset the prototype we don't have to set the constructor. It's far easier and cleaner

/* 
    c
    Circle {}[[Prototype]]: Shape // constructor: class Circle draw: ƒ draw()[[Prototype]]: Object
    * Note that in this prototype we have the draw method, because we as we discussed earlier all the methods we implemented here will end up in the prototype of circle
    * Now this prototype object itself has a prototype
    [[Prototype]]: Object
    constructor: class Shape
    move: ƒ move()
    [[Prototype]]: Object
    * This is where we have the move method

    ! NOTE: that constructor property here. line 46:
    * So this object was created by the shape class and here this object was created by the circle class.

    * So again we can see with the extends keyword we do not have to reset the constructor.

    * It's far easier, So now our circle object can be moved and drawn.
*/

// ! Next level! Let's imagine all our shapes need a color. So I am going to add a constructor in Shape

/*
    * I have added a constructor in Shape.
    * on the object of circle class I have passed the color and I get the below error message
const c = new Circle("red", 3);
07-Getters-Setters.js:35 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Circle (07-Getters-Setters.js:35:5)
    at 07-Getters-Setters.js:42:11

    ? What is happening here?
    * If you have a constructor in the parent class and then you add a constructor in the direct child class, inside of this constructor you should make sure to call the constructor first to initialize this base object.
    * So here in the constructor you can use the super keyword to reference the parent object
*/
