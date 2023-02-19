// ! Method Overriding
/*
 * So method overriding is when we have a method in a base class or a base object, but we want to change it's implementation in a derived class or a derived object.
 * So here we can override the move method by reimplementing it in the circle class
 */

class Shape {
  move() {
    console.log("Move");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("Circle Move");
  }
}

const c = new Circle();

/* 
    c 
    Circle {}
    => [[Prototype]]: Shape
        constructor: class Circle
        move: ƒ move()
        => [[Prototype]]: Object
            constructor: class Shape
            move: ƒ move()
            [[Prototype]]: Object
    
    * Now when accessing a property or a method because JavaScript engine walks up this tree, from the child all the way to the parent.
    * Move method on line 26, will be accessible first that's why this implementation is used
*/
