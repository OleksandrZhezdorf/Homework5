/* С разделением функции */
const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function run(n) {
    do {randomnumber = random(0,10)
        result = prompt('Try to say the right number from 0 to 10');
        console.log(result);
        console.log(randomnumber);
    } while (result != randomnumber && result);
    return n;
}
const runResult = run("You are right!");
console.log (runResult);
