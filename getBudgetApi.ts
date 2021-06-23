import { getBudgetAsync } from './api';

/*
the API returns something like:
{
  'shopping': 150,
  'food': 210,
  'utilities': 100
}
index signature below makes all of its type members have property names of a variable category
typed as a string with each key’s value typed as a number
*/
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();