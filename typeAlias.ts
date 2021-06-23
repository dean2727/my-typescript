type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.

type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};

type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.

// the "type" keyword does NOT always precede a generic function type alias
