for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}

for (let value of array) {
  // do something with value
}


for (let property in object) {
  // do something with object property
}

var nanme = o && o.getname();

var name = cashedName|| (cachedName=getName());

var allowed = (age>18) ? 'yes':'no';

switch (expression) {
  case expression:

    break;
  default:

}


function Person(name,age){
  this.name=name;
  this.age=age;
}

var you = new Person('Rick',33);
console.log(you.name);

//array

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});

a.push(item);


function add(){
  var sum=0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}


add(2,3,4,5);



function avg(...args){
  var a=0;
  for (let value of args){
    a+=value;
  }
  return a/args.length;
}

///anonymous function that can be assigned to a variable
var avg = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
