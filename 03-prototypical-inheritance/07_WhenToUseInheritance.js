// ? When to use inheritance ?
// ? Why inheritance is a great tool for solving the problem of code reuse, You have to be really careful about using it?
// Because it can make your source code complex and fragile.
// So don't use inheritance just for the sake of using it, especially in small projects.

// ! KEEP IT SIMPLE AND STUPID

// Start with simple object and then if you see a number of these objects share similar features. Then perhaps you can encapsulate those features inside of a generic object and use inheritance instead.

// * BUT remember inheritance is not the only solution to enable code reuse.
// * There is another technique called "COMPOSITION"

// ! If you wanna to use inheritance keep it to one LEVEL.

// * Favour "COMPOSITION" over "INHERITANCE"

// In composition instead of having complex hierarchy like this.
// We can compose a few objects together to create a new object and this technique give us great flexibility.

// Instead of using inheritance, we can define various features for our animal as independent object.
