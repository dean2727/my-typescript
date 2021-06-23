import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log";

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from "./wolf-point-log";

// union the keys and properies that racoon meadows and wolf point activities share
type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

// what we want our combined volunteer data to look like
type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  // create Volunteers objects from the union-typed volunteers
  volunteers.map((volunteer) => {
    let id: string | number = volunteer.id;
    if (typeof id === "string") {
      // convert string to integer (base 10)
      id = parseInt(id, 10);
    }
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
  return volunteers;
}

function isVerified(verified: string | boolean) {
  if (typeof verified === "string") {
    return verified.toLowerCase() === "yes";
  } else {
    return verified;
  }
}

function getHours(activity: CombinedActivity) {
  if ("hours" in activity) {
    return activity.hours;
  }
  return activity.time;
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      // make sure activity is verified
      if (isVerified(activity.verified)) {
        hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

// sort by ascending hours
function byHours(a, b) {
  return b.hours - a.hours;
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);
console.log(combinedVolunteers);

const result = calculateHours(combinedVolunteers);
console.log(result);

console.log(result.sort(byHours));
