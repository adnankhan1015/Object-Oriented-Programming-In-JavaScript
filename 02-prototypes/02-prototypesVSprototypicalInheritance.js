
// In js we have only OBJECTS.
// ? SO how can we implement inheritance only using objects?

// Here we have Shape object and another object we have is circle
// and add all the common behaviour or all the common methods in this object(Shape) like computeMinLocation() and then somehow we can link a circle object to the shape object.

// Now we refer to the shape object as the prototype of the circle object

// So "Prototype" is essentially a parent of another object

// Whenever you hear the word prototype just think "PROTOTYPE"
// ! So every object in JavaScript except only a single object that I am going to show you has a prototype or parent and it inherit all the members we find in its prototype.


// Object.getPrototypeOf()

// ! Prototypical Inheritance
// When we accessing a propert or a method on an object JavaScript Engine walks up the prototype chain to find the target member.

// ! Multi-Level Inheritance
// When we call an array, a layer added as a array prototype. and that is further derived from Object Prototype or (ObjectBase)

// ? What about the objects we create using custom coinstructor?


function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('Draw')
    }
}

const circle = new Circle(10)
// {}


// We created the circle object using this constructor. 
//  inspect the circle object in the console,
    // > circle
        // It has a prototype   
            // Look this prototype is the prototype for all the circle object that we create using our circle constructor(Lets call it circleBase)

// So everytime we call the circle constructor to create a new object.
// e.g new Circle(10)
    // This constructor will create a new object and set its prototype property to circleBase
// ! In other words, Object Created by a given constructor will have the same prototype.

// So all circle objects created by the circle constructor will have the same prototype and similarly 
// All arrays created by the array constructor will have the same prototype