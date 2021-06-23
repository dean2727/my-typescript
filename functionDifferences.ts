// ALWAYS use type annotations, unless you have a good reason not to

// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};

// we are telling TypeScript that status is allowed to be undefined
// without the ?, TS throws an error (but JS doesnt)
// the || statements arent just used with strings. theyre used anywhere an optional parameter is mentioned
function proclaim(status?: string) {
  console.log(`I'm ${status || "not ready..."}`);
}

proclaim();
proclaim("ready?");
proclaim("ready!");

// default parameters, imply that the parameter is optional
// in this case, type inference allows us to pass in only a string or undefined
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.
// even though its declared as a number, it is assigned a value of type string (return type inferred)

// through explicit return types, we can avoid JS code working when it shouldnt be, e.g. returning huge ints
const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined;
  // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

// rest parameters: a way to express an arbitrary number of parameters
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));
// expected output: 6
// can add type annotations to them as well (here, all the args should be of type number)
function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

// spread syntax (from JS) allows us to pass in tuples for these parameters
function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if (hasFlair) {
    console.log("I do it with flair!");
  }
}
let danceMoves: [string, number, boolean][] = [
  ["chicken beak", 4, false],
  ["wing flap", 4, false],
  ["tail feather shake", 4, false],
  ["clap", 4, false],
  ["chicken beak", 4, true],
  ["wing flap", 4, true],
  ["tail feather shake", 4, true],
  ["clap", 4, true],
];
for (let i = 0; i < danceMoves.length; i++) {
  performDanceMove(...danceMoves[i]);
}
