
function run(n) {
    do {
        result = prompt('Try to say the right number from 0 to 10');
        randomresult = Math.floor(Math.random()*10);
        console.log(randomresult);
        console.log(result);
        num1 = Number(result);
        num2 = Number(randomresult);
        console.log(randomresult === result);
    } while (num1 != num2 && num1);
    return n;
}
const runResult = run("You are right!");
console.log (runResult);

