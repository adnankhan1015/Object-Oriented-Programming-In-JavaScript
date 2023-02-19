"use strict";
// * Cause of this you will see that instead of getting the window object on the console we will get 'undefined'
/*
 * When we enable strict mode if you call a method as a function "this" by default will no longer point to the window object. It will be set to undefined
 * and the reason for this is to prevent is from accidentally modifying the window object
 */
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};
// Now we create a circle object
const circle = new Circle();

circle.draw(); // Method Call

/* 
    Circle {draw: ƒ}
    draw: ƒ ()
    [[Prototype]]: Object
    
    * we have seen the circle object because this will point to that circle object.
*/

// ! Now instead of calling this draw method like this, I am going to get a reference to this method, store it in a constant called draw

const draw = circle.draw;
// console.log(draw);
// ! Note that I am called this method
// Simply I am getting a reference to this method
/* 
    ƒ () {
    console.log(this);
  }
*/

const drawMethod = circle.draw;
drawMethod();

/* 
  On the console you are going to see the window object
  ? WHy didn't you get the "circle" object?
  ? let me tell you why?
  * This syntax we have on line 9 is what we call method. circle.draw(); // Method 
  * Because we are calling a method on an object.  
  *     In this case "this" in this function will point to this object which is our "circle" object, right?
  ! Now the syntax we have on line 32 is what we call function call : drawMethod();
  * Because we are calling this on a stand alone function that is not a part of an object. SO when we call this method as a function by default "this" keyword will point to the global object
*/

// * Class
class CircleClass {
  draw() {
    console.log("Inside of a Class", this);
  }
}

// Create object of the class with the name c
const c = new CircleClass();

// Here I have reference the draw method to a variable called classFunction
const classFunction = c.draw;
// And here I called the variable in which I have saved the reference of the method and called it as a stand alone function
classFunction();

/* 
    ? Why in class it isn't go to the global object?
    * Because by default classes are executed in 'strict mode'
    ? What is this 'strict mode'?
    * Now in JS you have this mode that is called 'Strict mode'
    * when we enable 'strict mode' JS engine will be most sensitive. So it will do more error checking if there are errors that silently fails. It is going to turn them into exceptions and also it will change the behavior of the "this" keyword in functions
*/
