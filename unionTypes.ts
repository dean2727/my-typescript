let myUnion: string | number = "hi";
myUnion = 2;

// any properties or methods that are not shared by all union members (in this case string and number) arent allowed
// however, type narrowing circumvents this
function getMarginLeft(margin: string | number) {
  // type narrowing: TS can infer more specific types based on the variable's surrounding code
  // TS has narrowed the type inside the type guard to only be a string
  if (typeof margin === "string") {
    // perform type-specific logic with no errors
  }
}

function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // round to 2 decimal places (adds zeroes if integer or 1 decimal place)
  }
}

formatValue("Hiya");
formatValue(42);

type User = {
  id: number;
  username: string;
};

// union return type is inferred. could be a User or a string
function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

let userData: User | string = createUser();

const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string
// union types in arrays. each element can be either string or number
const timesList: (string | number)[] = [dateNumber, dateString];  // string | number[] would mean timesList is a string or an array of numbers

// unions with literal types. useful when we want to create distinct states within a program
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') {
    console.log('Download');
  }
  if (status === 'downloading') {
    console.log('Downloading...');
  }
  if (status === 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('idle');