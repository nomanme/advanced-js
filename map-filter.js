const numbers = [2, 3, 4, 6];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square(element) {
    return element * element;
}

const square = element => element * element;
const square = x => x * x;
numbers.map(function square(element, index, array) {
    console.log(element, index, array);
});

const result = numbers.map(function square(element, index, array) {
    return element * element;
});
console.log(result);

const final = numbers.map(x => x * x);
console.log(final);

const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x < 3);
console.log(isThere);