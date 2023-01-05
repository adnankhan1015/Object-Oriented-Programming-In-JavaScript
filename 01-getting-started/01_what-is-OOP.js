// ? What is Object Oriented Programming?
// * A programming "Paradigm" or style of programming that is centered around "OBJECTS" rather than functions.
// OOP is not a programming language or a tool.
// * It's a style of programming paradigm.

// Languages that's support OOP
// C#, Java, Ruby, Python, JavaScript, C++

// ! 4 Pillars of OOP.
// * 1. Encapsulation
// * 2. Abstraction
// * 3. Inheritance
// * 4. Polymorphism

// ! 1. Encapsulation
// * In OOP we group related variables and functions that operates on them into objects and this is what we call Encapsulation

// * Procedural Programming
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate;
}

console.log(getWage(baseSalary, overTime, rate));

// * OOP

let employee = {
  baseSalary: 10_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overTime * this.rate;
  },
};

console.log(employee.getWage());

// All the properties and methods they are highly relatable so they are part of one unit.

// Procedural code the function have so many parameters. but in OOP way write of code, your function end up fewer parameters.
// * The best functions are those with no parameter. (Uncle Bob Robert C Martin)

// ! 2. Abstraction
// * All complexity is hidden from YOU.
// In object we can hide some of the properties and methods from the outside and this gives us a couple for benefits.
// First, Is that we will make the interface of those objects simpler. Using and understanding an object with a few properties and methods is easier than an object with several properties and methods.
// Secondly, It helps us reduce the impact of CHANGE.

// Example: Tomorrow we change these inner or private methods. None of these changes will leak to the outsider, because we don't have any code that touches these methods outside of their container object.
// You may delete the method or change it's parameters but none of these changes will impact the rest of the applied code.

// ! With ABSTRACTION we reduce the impact of CHANGE.

// ! 3. Inheritance
// * Inheritance is a mechanism that allows you to eliminate redundant code.
// Example: Think of HTML elements such as, TextBox, Select, CheckBox. All these elements have a few things in common.
// They should have properties alike, Instead of redefining all these properties and methods for every type of HTML element.
// We can define them once in a generic object call it HTML element. an other object inherit these properties and methods.

// ! Inheritance helps us eliminate redundant code.!

// ! 4. Polymorphism
// * Poly means many, and "morph" mean form. So polymorphism means "many forms"
// In OOP, polymorphism is a technique that allows you to get rid of long if..else ans switch..cases statements.

/**************************************************************************
 * 1. Encapsulation: Reduce Complexity and Increase Reusability
 * 2. Abstraction: Reduce Complexity and Isolate impact of change. In other words hiding the detail and complexity and showing only the essentials.
 * 3. Inheritance: Eliminate Redundant Code
 * 4. Polymorphism: Refactor Ugly switch/Case or If/else
 *************************************************************************/
