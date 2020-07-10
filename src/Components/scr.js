function sumDigits(number) {
    let num = Math.abs(number);
    let sum = 0
    let array = num.toString().split("");
    array.forEach(i => {sum + i});
    return sum
}

console.log(sumDigits(35));