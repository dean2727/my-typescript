// review: in generics, we have type parameters (e.g. <NewType>), and then we can substitute any type
// in the place of NewType

// this is a collection of object types, with a different type for every value of T
type Family<T> = {
    parents: [T, T], mate: T, children: T[]
};

let aStringFamily: Family<string> = {
    parents: ['stern string', 'nice string'],
    mate: 'string next door', 
    children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 

// we can also use generics to create collections of typed functions
// in this function that creates an array of length n and fills each spot with value, we wouldnt
// know what the return type is, but with generics, we can handle it
function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// when we call the generic function, we must provide T
stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6);
coordinateArray = getFilledArray<[number, number]>([3,4], 6);