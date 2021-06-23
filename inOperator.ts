// in operator checks if a property exists on an object itself or anywhere within its prototype chain

type Tennis = {
  serve: () => void;
};

type Soccer = {
  kick: () => void;
};

function play(sport: Tennis | Soccer) {
    // in is a type guard
  if ("serve" in sport) {
    // once in here, TS type narrows sport to be Tennis
    return sport.serve();
  }

  if ("kick" in sport) {  // could also use an else, or just nothing at all
    return sport.kick();
  }
}
