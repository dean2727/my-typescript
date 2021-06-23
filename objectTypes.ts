let aPerson: {name: string, age: number};
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
aPerson = {name: 'User McCodecad', age: 22}; // Valid code. 

// object as a parameter for a function
function sayHappyBirthdayWithObject(personObject: {name: string, age: number, giftWish: string, success: boolean}){
    let output ='';
    output += 'Happy Birthday '
           + personObject.name + '! ';
    output += 'You are now ' 
           + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive ' 
           + personObject.giftWish 
           + '. And guess what? You will ';
    if (!personObject.success){
      output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
}

// an array of objects
let birthdayBabies: {name: string, age: number, giftWish: string, success: boolean}[] = [
    {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
    {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
    {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

// run function on each object
birthdayBabies.forEach(sayHappyBirthdayWithObject);