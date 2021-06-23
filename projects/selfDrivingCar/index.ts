/*
thought process for this project:
1. what is our file structure? what is in each file? getting familiar with things
2. create the Car class, itll be made autonomous with typed properties and methods
3. lets make some interfaces. relevant ones are AutonomousCar, AutonomousCarProps, and Events
Events represents the data we retrieve which is obstacles indications from computer vision
(so use an index signature)
4. make the car class implement an interface, and create the constructor which provides isRunning
boolean
5. check if the car is running when instantiated via console log
6. now lets see if the Car can respond to events by implementing and testing respond() 
7. now we can add controls that react to different events, like steering. for steering, we'll need
to create a few types to define a steering control and a class that handles steering, then passing
that into a Car instance
8. complete the respond() implementation for steering, and test
(a lot more could be added, like acceleration and machine learning :) )
*/

import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [event: string]: boolean;
}

// all controls must execute
interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing:${command}`);
  }

  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events) {
    if (this.isRunning) {
      // get the keys in events
      let keys = Object.keys(events);
      keys.forEach(eventKey => {
        if (!eventKey) {
          return;
        }
        if (eventKey === 'ObstacleLeft') {
          this.steeringControl.turn('right');
        }
        if (eventKey === 'ObstacleRight') {
          this.steeringControl.turn('left');
        }
      });
    }
    else {
      console.log("The car is off!");
    }
  }
}

let steering = new SteeringControl();
// steering.turn("left");

let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
console.log(autonomousCar.respond(getObstacleEvents()));