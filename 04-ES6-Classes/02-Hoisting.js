// * Hoisting: In JavaScript are two ways to define a function.

// * 1. function Declaration
// * Function declarations are hoisted which means they raise to the top of the code. I can declare a function and then can call it before it's declaration.

// * So essentially when this code executed, the function declaration raise to top of the code.
sayHello();
function sayHello() {}

// * 1. function Expression
// * Function Expression are not hoisted
/*
    console.log(num)
    * We cannot use these identifiers before they have declared
    const num = 1;

 */
const sayGoodBye = function () {}; // We terminate the expression with a semi-colon

/*

    Now when it comes to classes we can define classes using a declaration or expression syntax

*/

// Class declarations
class Circle {}

// Class Expression
const Square = class {};

// Class Declaration and Class Expression are not hoisted. So here we cannot create a circle object like this e.g const c = new Circle()
