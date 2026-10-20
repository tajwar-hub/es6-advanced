/*  
// two data types 
// 1. primitive data type: string, number, boolean, undefined, null

let name = "Utsho";
let name2 = name;
let age = 26;
let isMarried = false;
let universityResult = undefined;
let salary = null;
name = "Habib"
console.log(name2);
console.log(
  typeof name,
  typeof age,
  typeof isMarried,
  typeof universityResult,
  typeof salary,
);

// 2. Non primitive data type: function , object and array 

let student = {
  name: "Utsho",
};
let student2 = {...student};
let arr = [100, 300, 30];
let arr2 = [...arr];
function add(a, b) {
  return a + b;
}
console.log(typeof student, typeof arr, typeof add);
student.age = 26
console.log(student2);
arr.push(400)
console.log(arr2);  
*/

let name = "Ahmed Tajwar Rhythm ";
let name2 = name;
let number = 129;
let isMarried = false;
let name3 = undefined;
let name4 = null;

console.log(
  "\n",

  typeof name,
  typeof name2,
  typeof number,
  typeof isMarried,
  typeof name3,
  typeof name4,
  "\n",
);

let StringTemp = `The name is : ${name2} age is ${number} and the marriage status is ${isMarried}
 
                     The type of name is ${typeof name2} type of age is ${typeof number} `;

console.log(StringTemp);
