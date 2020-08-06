let bonus = 21;

function sum(a, b) {
    let result = a + b + bonus;
    console.log('scope:', result)
    if (result > 4) {
        const mood = 'Happy';
        console.log(mood);
    }
    return result;
}

const total = sum(2, 3);
console.log(bonus);
console.log(total);