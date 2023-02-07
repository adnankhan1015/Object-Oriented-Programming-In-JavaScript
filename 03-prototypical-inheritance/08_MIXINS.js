// ! MIXINS
// * In JavaScript we can use "mixins" to achieve "COMPOSITION"

// ! we pass the objects into this function using the rest operator, using (...source) => Collect all the arguments and turn them into an array.
// * Object.assign() => needs sources explicitly we cannot pass an array here. So this time we can use the spread operator.(To spread an array into multiple arguments we are spreading array into multiple objects)
function mixin(target, ...source) {
  // console.log("Mixin", ...source);
  Object.keys(target, ...source);
}

// We are defining one feature as an object
const canEat = {
  eat: function () {
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

// Now we can compose these objects together to create a person that can walk and eat.

// ! IN ES6, we have a new method Object.assign(), we can pass an object as a target and then pass one or more source objects

const person = Object.assign({}, canWalk, canEat);
console.log("Person >", person);
// We can use this to copy the properties and methods from one object to another.

// This Object.assign will copy all the properties and methods that we have defined in canWalk and canEat into this blank object. also we can add more source here
// {} combination of these 2 different objects.

// Now if we are using a constructor function, we can still use this technique
// ! Constructor Function
function Person() {}

// after that instead of passing an empty object here We can pass Person.prototype as the target object and we don't need the return value anymore.

// Object.assign(Person.prototype, canEat, canWalk);
// ! Called the mixin function
mixin(Person.prototype, canEat, canWalk);
const person2 = new Person();
console.log(person2);

// * If we want to add new features
const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

// * Constructor Function
function GoldFish() {}

// For more readable we can extract it to a function
// Object.assign(GoldFish.prototype, canEat, canSwim);
// ! Called the mixin function
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);

// * Object.assign is repeating for the prototype we can add it in a function and add it on top.
