console.log('Rick is a sucker');
let random = 'Happy Bday';
const rate = 0.3;
console.log(rate);
// primitives/value types

// string
let this_string='This is a string';
let age = 30; // number, only one type: number
let isHappy = true; //Boolean literal
let Rick = undefined;//type=undefined
let Rick_Haha = null;//type=object

//Dynamic Language vs static Language
//dynamic variable could change in the future


// reference types: object, array, function
let person = {
  Rick:"dumbass",
  Rick_property:"poor"
} //object literal
person.Rick_property='Rich'
console.log(person.Rick_property);
console.log(person['Rick']);


let selection = 'Rick';
person[selection]='dumbass';
console.log(person.Rick);


//array
let selectedColors = ['red','blue'];
selectedColors[2]='green';
selectedColors[3]=1;
console.log(selectedColors);


//function
function greet(name){
  console.log("Hello" + name);
}

greet('John');


var name = 'kittens';
if (name==='puppies') {
  name+='woof';

}else if (name==='kittens') {
  name+='meow';
}else {
  name+='!';
}

name === 'kittens meow';
console.log(name);

// while (true) {
//
// }
//
// do {
//   input=get_input()
// } while (inputIsNotValid(input));
//
// for (var i = 0; i < this_string.length; i++) {
//   this_string[i]
// }
//
// for (let value of array) {
//
// }
//
// for (let property in object){
//
// }

function Person(name,age){
  this.name=name;
  this.age=age;
}

var you = new Person('Rick',33);
console.log(you.name);
