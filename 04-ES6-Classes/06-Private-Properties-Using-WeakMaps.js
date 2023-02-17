// ! Private Properties Using WeakMaps

/*
    const _radius; For our own convention to indicate this is a private property
    * WeakMap is essentially a dictionary where keys are objects and values can be anything, and the reason we call them "WeakMap" is because the keys are the weak. So, if there are no references of these keys. They will be garbage collected
*/

/*
    _radius.set(this, radius);
               Object
    * Not set radius property anymore instead we are going to work with this radius key map.
    * We call the set method
    * This first argument is the key, and you can see that the key is an object.
    * It cannot be a symbol.
    * So here we pass "this" which represents the instances of circle object. That's our key(this).
    * For the value I am going to use this "radius" argument
    * Technically we can access this radius private property if we can get access to this weakmap. e.g constructor = new Constructor())
*/
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("Move", this);
    });
  }
  // * in order to read the radius property
  draw() {
    _move.get(this)();
    console.log(_radius.get(this));
  }

  getRadius() {
    return _radius.get(this);
  }
}

const c = new Circle(2);

/*
when we inspect c on the console
    c
    Circle {}
    [[Prototype]]: Object
* we don't have the radius property.
* Now if you want to access this property inside of this class. we want to new it somewhere
 */

/*
 *  Here we need to reference a key. In this case the key is the instance of the circle object "this" and "this" will return the value of the radius property.
 * when we console log it   console.log(_radius.get(this)); and call the c.draw() we get the radius value
 */
