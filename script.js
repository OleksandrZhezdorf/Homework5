/* Функция возведения в степень */
function pow(n, p) {
    let value = n;
    if (p===0) 
        return 1;
    for (let i=1; i<p; i++) {
        n *= value;
    }
    return n;
}
const powResult = pow(3, 4);
console.log (powResult);
//////

