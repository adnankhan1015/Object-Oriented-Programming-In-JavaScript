// ! Property Description
let person = {
  name: "John",
};

console.log(person);
// Here's our person object and in this prototype we have all these methods available. So we can type. > person.toString() on the console and it works
// However, if we iterate over the members of this object we are not going to see this method "toString()" so a for...in loop

for (let key in person) {
  console.log("For...in loop>>", key);
}

// So, Only key we have here is "name". None of the properties and methods defined in objectBase are visible here. By the same token, if we call Object.keys(person) and then log it on the console.

Object.keys(person);
console.log("Object.keys()>>>", Object.keys(person));
// We only see the name property ['name'].
// So now come we can't iterate overall these properties and methods defined in objectBase.

// Well the reason is because in JavaScript our properties have attributes attached to them.

// Sometimes these attributes prevent a property from being enumerated

// Let me, show you what I mean So, first let's get the prototype, or person. we call

let objectBase = Object.getPrototypeOf(person);
// Now I want to show you the attributes attached to the toString method.
// So we call Object.getOwnPropertyDescriptor(objectBase, 'toString'), its first argument is we pass is th objectBase online 27.
// As the second argument we pass the name of the target property or method that is toString
// And this will return an object which we call a property descriptor

let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log("Descriptor", descriptor);

// On Console: This is our descriptor object look at the properties.
// 1. Configurable: true(that means we can delete this member if we want to)
// 2. Enumerable: false(That's why when we iterated over our person object. We couldn't see the toString method)
// 3. Writable: true (Which means we can overwrite this method. We can change its implementation then set its value)
// 4. value: f toString() (and here the value property which is set to a method and this is where we have the default implementation of the toString method)

// ! Now when you create your own objects you can send these attributes for your properties.

Object.defineProperty(person, "name", {
  configurable: false,
  enumerable: false,
  writable: false,
});

person.name = "Smith";
console.log("Call Person Object after the Define property method", person);

console.log(
  "Object.keys() Call Person Object after the Define property method",
  Object.keys(person)
);

for (let key in person) {
  console.log(
    "For...in loop Call Person Object after the Define property method",
    key
  );
}
