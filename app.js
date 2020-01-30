// var str1 = "hello";
// var str2 = "world";
// console.log(str1 + str2);

// var x = 5;
// if (x == "5") {
//   console.log(x);
// }

// x == 5 ? console.log("5") : console.log("NAN");
// //switch case
// switch (x) {
//   case 1:
//     console.log(1);
//   case 2:
//     console.log(2);
//     break;
//   case 5:
//     console.log(5);
//   default:
//     console.log("value does not match");
// }
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (var i = 5; i > 0; i--) {
//   console.log(i);
// }
// // while loop
// var j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }
// //do loop
// do {
//   console.log(a);
// } while (a < 10);

// //function declaration in js
// function person() {
//   console.log("He is ram");
// }
// person();
// function person(name, age) {
//   console.log(`He is ${name}`);
//   console.log(`Age is ${age}`);
// }
// person("hari", 25);

// // var,let,const
// // var function scope
// function loopData() {
//   for (var b = 0; b < 10; i++) {
//     console.log(b);
//   }
// }
// loopData();
// //let block scope
// function loopData() {
//   for (let b = 0; b < 10; i++) {
//     console.log(b);
//   }
// }
// loopData();
// // const block scope
// /*not allowed to re-asign
// value most be given
// */

// //const user;
// //user="hari";
// //console.log(user);

let user = {
  name: "ram",
  age: 20,
  hobbies: ["programming", "football", "reading"],
  address: "tinkune",
  city: "ktm"
};
console.log(user);
console.log(user.name);

// Destructuring in js (es6)
const { city, street } = user.address;
console.log(city);
console.log(street);
// number to string
let num = 25;
num = true;
console.log(num);
console.log(String(num));
// string to number
let str = "25";
console.log(str);
console.log(Number(str));
console.log(str * 1);

// truthy and falsy in js
console.log(true && 2 && "hello");
console.log(false && 2); // falsy in js
console.log(0 && "hello");
console.log("" && 2);
console.log(null && "hi");
console.log(undefined && "data");
console.log(NaN && 5);

// Array in js
let arr = Array(1, 2, 3, 4);
arr.pop(); // remove last item in array
arr.push("hello"); // add item in last

arr.unshift(2, 2, 2); // add to first index of array
arr.shift(); // remove from first of index

console.log(arr);
console.log(arr[0]);
// is array or not
console.log(Array.isArray("arr"));
console.log(Array.isArray(arr));

let student = [
  (id = {
    name: "Dip",
    age: 20,
    address: "lamki"
  }),
  (id1 = {
    name: "sajjan",
    age: 23,
    address: "tikapur"
  }),
  (id2 = {
    name: "hari",
    age: 25,
    address: ["kailali", "kathmandu"]
  })
];
// console.log(student);
// console.log(student[0].name);
// console.log(student[1].name);
// console.log(student[2].name);
// console.log(student[2].address);
// console.log(student[2].address[1]);
// for loop

for (i = 0; i < student.length; i++) {
  console.log(student[i].address);
}

// Higher order array method
// foreach array method
student.forEach(function(student, index, allstudent) {
  console.log(student);
  console.log(index);
  console.log(allstudent);
});

// map in js
// let newStudent= student.map(function(data,index,alldata){
// return index;
// })
//filter in js

let filterData = student.filter(function(student) {
  return student.age === 20;
});
console.log(filterData);
