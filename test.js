// //url format 1
// let url='https://youtu.be/T94PHkuydcw';
// console.log(url.substring(17,28));


// //url format 2
// let str='https://www.youtube.com/watch?v=T94PHkuydcw';
// let index=str.indexOf('=')
// let str1=str.substring(index+1,index+12)
// console.log(str1);

// const mySet = new Set()
// mySet.add(1)
// mySet.add(1)
// mySet.add('a')
// mySet.add('a')
// mySet.add(undefined)
// mySet.add(undefined)
// mySet.add({prop: true})
// mySet.add({prop: true})
// console.log(mySet);
// console.log('Size:', mySet.size)

// function* gen1() {
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)
// }

// const iterator = gen1()

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

// function myFunction(y1, y2, ...y3) {
//     const [x1, ...[result]] = y3

//     console.log(result)
// }

// const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// myFunction(...myArray)
// 'use strict'
// let green;
// grnee = false;
// console.log(grnee);


// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => {resolve('b')}, 50);
// 	});
// };
// async function logger() {
//     setTimeout(() => console.log('a'), 10);
//     console.log(await apiCall());
//     console.log('c');
// };
// logger();

// const a = 0;
// const b = '';
// c=[false]
// const outcome = !!(a || b || c || d);

// class Apple {
//     constructor() {
//         this.type = 'apples'
//         this.varieties = ['Granny Smith', 'Fuji', 'Pink Lady'];
//     };
//     logVarieties(callback) {

//         this.varieties.forEach(function(el) {
//             console.log(`We have ${el} ${this.type}.`)
//         });
//     };
// }
// const apple = new Apple();
// apple.logVarieties();


// const array = [10, 2, 3, 1, 2, 4, 5, 3];
// const uniqueArray = array.filter((elem, index, arr) => {
//   return index === arr.indexOf(elem);
// });
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// function multiplicationTable(n) {
//   let table = [];
//   for (let i = 0; i <= n; i++) {
//     table[i] = [];
//     for (let j = 0; j <= n; j++) {
//       table[i][j] = i * j;
//     }
//   }
//   return table;
// }

// Example usage
// const table = multiplicationTable(5);
// console.log(table);


// let callme=(x)=>{
// console.log(typeof x, x);
// console.log(arguments.length);
// }
// callme("10","20","30");

// function Employee1 (name,age) => {
// this.name=name,
// this.age=age
// }
// let employees = new Employee1('Darshan', 90);
// console.log(employees);

