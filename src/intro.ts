//Adding explicit ': number' type annotations to function parameters
function multiply(a: number, b: number): number {
return a * b;
}
//Initializing 'score' as a number (TypeScript infers the type)
let score = 100;
//Restoring 'score' to a valid numeric value instead of a string
score = 200;
console.log("The current score is:", score);
//Correcting the function argument from a string ("10") to a number (10)
console.log(multiply(5, 10));