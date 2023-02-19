// ! Private properties using symbols
/* 
    * Earlier in the course we talked about abstraction as one of the core principles of OOP.
    ! So "Abstraction" means hiding the details and properties and showing only the essential parts.
    * Now to implement abstraction we use "Private Properties and methods"
    So we hide certain members of an object so they won't be accessible from the outside. 
    * SO, here we have this circle class we set the radius property in the constructor, and as you know this radius property is public by default which means if I create a circle object. I can access the radius property.
*/

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
// }

// const c = new Circle(3);
// c.radius;
/* 
    const c = new Circle(3);
    c.radius;
    * Now in this case we want the radius to be public because that is an essential attribute about a circle.
    ! In this lecture we want this radius property to be private.   
*/

/* 
 ! Private properties and methods using ES6 Classes.
 * There are basically 3 different approaches.
 * First Approach. => Terrible one, Is using an underscore as a naming convention.
 * e.g  
    constructor(radius) {
        this._radius = radius;
    }
    * c._radius => It still accessible from the outside.
    ! So this is not abstraction
        * This is a convention for developers. It doesn't prevent another developer from writing code against this property. 
*/

/*
 * With "Abstraction" we want to hide some of the properties and methods from the outside. So, as we change them, we isolate the impact of changes to the containing object.
 * We do not want these details to leak to the outside.
 */

/*
    ! Second Approach
    * ES6 Symbols
        * To implement private
    * In ES6 we have a new type a "Primitive Type" called "Symbol()"
    * Symbol() is a function we call to generate a symbol. A symbol is essentially a unique identifier. Every time we call this function we get a new unique identifier. 
    ! NOTE: This is not a constructor function: so we cannot write: new Symbol()
    const _radius = Symbol()
    
    Symbol() === Symbol()
    false
    * So every time we call a symbol function we get a new unique identifier
    * I would use this unique value as the property name of an object
*/

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("Draw");
  }
  //   draw(){}
}

const c = new Circle(3);
console.log(Object.getOwnPropertyNames(c));

/*
    Circle {radius: 3, Symbol(): 3}
    radius: 3
    Symbol(): 3
    [[Prototype]]: Object

    * With symbol we can also use a Symbol as a property name instead of a string.
    * This is how we use it internally the name of property is a unique value.
    * So, if we set multiple properties using Symbol the property names all show up as symbol. But internally they are unique.
    * c.radius we don't the property anymore.
    * we don't have _radius so we cannot directly access the property in code.
    
    * Object.getOwnPropertyNames(c) // this returns array of symbol
    * []
    * c is an array. on the console we get an empty array
    * Because we don't have any properties or more accurately any regular property in this object
*/

const key = Object.getOwnPropertyNames(c)[0];
console.log(c[key]);

/*
 * Inside of the class when we creating a method we cannot use it like draw(){}. Instead of using this name we want to use our symbol.
 * Now in ES6 we have this new feature called "Computed Property Names" So we can add brackets and inside of these brackets we add an expression.
 * when that expression is evaluated the resulting value will be used as the name of a property or method.
 * [_draw]() {} => So this expression our symbol will be evaluated we get a unique identifier and because we put that inside of these brackets that unique ID will be used as the name of this method
 */
