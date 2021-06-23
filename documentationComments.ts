// notice the second * in the first line
/**
 * Makes a fruit salad
 * @param fruit1 - The first fruit
 * @param fruit2 - The second fruit
 * @returns nothing
 */
 function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
}

/**
 * Logs the status of the agent a certain number of times
 * @param status - The status
 * @param repeat - The number of times to log the status
 * @returns nothing
 */
function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}