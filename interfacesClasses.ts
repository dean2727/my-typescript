// they are like types, except work better with object oriented programming and
// dont act like aliases for primitive types (as types do). the objects in OOP
// may need many typed objects, and interfaces are more constraining (can only type objects), 
// so its better

interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}

updateRunGoal({
  miles: 5,
});

interface Robot {
  identify: (id: number) => void;
}

// apply Robot to OneSeries
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }
 
  answerQuestion() {
    console.log('42!');
  }
}

// deep types in interface
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string,
      permissions: string
    }
  }
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);

// using interfaces in interfaces. keeps code organized and flexible
interface About {
  general: General;
}
 
interface General {
  id: number;
  name: string;
  version: Version;
}
 
interface Version {
  versionNumber: number;
}

interface Shape {
  color: string;
}
 
// extends makes a copy of the interface we're extending from, and adds more. allows for abstractions
interface Square extends Shape {
  sideLength: number;
}
 
const mySquare: Square = { sideLength: 10, color: 'blue' };


// index signatures: its sometimes not possible to know the property names for an object (e.g. when getting
// data from an API). an index signature is a way to include a variable name for a property name (e.g. if
// we get a list of latitudes from an API call that are strings, and their values are booleans, the index
// signature, latitude, defines every property name as a string type with a boolean value. this is just for
// developers to use as a human-readable name and show up in error messages later)
interface SolarEclipse {
  [latitude: string]: boolean;
} 

// optional type members (?). makes programs more concise and easier to reason about
interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  username: string;
}

function getUserName(options: UserNameOptions) {
  // need to check if optional property exists before using it
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})