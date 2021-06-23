import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number,
  studyGroupId: number,
  title: string,
  keywords: string[],
  eventType: string
};

type StudyGroup = {
  id: number,
  courseId: number,
  title: string,
  keywords: string[],
  eventType: string
};

type SearchEventOptions = {
  query: string | number,
  eventType: string | number
};

function searchEvents(options: SearchEventOptions) {
  // take a list of courses or study groups and filter them based on the query property from options
  let events: (Course | StudyGroup)[] = studyGroups;
  if (options.eventType === 'courses') {
    events = courses;
  }
  events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    }
    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
  });

  return events;
}

let enrolledEvents: (Course | StudyGroup)[] = [];
function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

let testOpt1: SearchEventOptions = {
  query: 1,
  eventType: 'courses'
}

let testOpt2: SearchEventOptions = {
  query: 'art',
  eventType: 'courses'
}

let test1 = searchEvents(testOpt1);
let test2 = searchEvents(testOpt2);

console.log(test1);

enroll(test1[0]);
console.log(enrolledEvents);
