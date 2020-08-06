const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Maannaaaa' },
    { id: 41, name: 'Shabnur' },
    { id: 51, name: 'Dipjol' }
];

const name = students.map(s => s.name);
const ids = students.map(d => d.id);
const bigger = students.filter(b => b.id > 30);
// console.log(name);
// console.log(ids);
console.log(bigger);