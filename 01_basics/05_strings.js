const name = "Priyansh"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`priyansh`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf(`y`));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "        Priyansh the Coder         "
console.log(newStringOne);
console.log(newStringOne.trim());




const url = "https://priyansh.com/priyannsh%20thapar"
console.log(url.replace("%20", "-"));


console.log(url.includes("priyansh"));

console.log(gameName.split('1'));