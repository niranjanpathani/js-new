const name="niranjan"

const repoCount=50

// console.log(name + repoCount + " value");
// console.log(`Hello my name is ${name}  and my repo cont is ${repoCount}`);

const gameName= new String('Niranjan-p')

// console.log(gameName.__proto__);

// console.log(gameName.length );

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newString1= "    Niranjan   ";
console.log(newString1);
console.log(newString1.trim());


const url ="https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

const sent= `The quick brown fox jumps over the lazy dog and cow.`;

console.log(sent.length);

console.log(sent.charAt(5));

console.log(sent.charCodeAt(4));

console.log(String.fromCharCode(190, 53, 180, 25));

console.log(sent.indexOf('fox'));