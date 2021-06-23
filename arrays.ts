// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];
let anyArr = [1, true, 'string'];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

/* tuple
- CANNOT assign arrays to tuples
- fixed # of elements
- strict ordering of elements to ensure correct types are assigned
- each type must be declared separately
*/
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];

// concat(): combine contents of tuples/arrays
let myArr = tupleOfExamAnswers.concat(tupleOfExamAnswers);  // this is of type boolean[] (no other type allowed)
// no error here. just finds next largest index
myArr[50] = false;
const headlines: [string, boolean, string] = ['It is', true, '!'];
const more = ['This is not', false, 'news.'];
let updated = headlines.concat(more);  // this is of type any[] (elements are not of uniform type)

// generic type for an array
let browsers: Array<string> = [
    'Chrome',
    'Firefox',
    'Safari',
    'Opera',
    'Edge'
];