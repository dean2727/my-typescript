enum Direction {
    North,  // equal to a value of 0
    South,  // equal to 1
    East,  // ...
    West
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 
whichWayToArcticOcean = 24135;  // arbitrary number raises no errors (not good)

enum Dog {
    Lab = 7,
    Doodle,  // equal to 8
    Golden_Retriever,  // ...
    Mix
}

// string enums allow for more informative and easy-to-read error messages and logs, as well as less bugs
// convention is to capitalize the variable name for the string names
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
whichWayToAntarctica: DirectionString;
whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.