const marvelHero=["thor","iron","Spider"]
const dcHero=["Super","flash"]

// marvelHero.push(dcHero)
// console.log(marvelHero);


// concat operator
const newArr=marvelHero.concat(dcHero)

// console.log(marvelHero);

console.log(newArr);

console.log(newArr[4]);
// using Spred Operator ...

const all_new=[...marvelHero, ...dcHero]
console.log(all_new);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)

console.log(real_array);

console.log(Array.isArray("Niranjan"));

console.log(Array.from("Niranjan"));
console.log(Array.from({name:"niranjan"}));  // interesting 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
