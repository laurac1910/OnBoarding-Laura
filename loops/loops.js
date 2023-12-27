// //////////////Difficulty Level: Low

//  const num = Number(prompt(`Enter a number`))
//  if (num >= 1 && num <= 100) {
//      for (let i = num; i >= 0; i--) {
//         console.log( i );
//      }else{
//         alert ("Invalid")
//      }
//  }


// const num2 = Number (prompt(`Enter a number`))
// if (num2 >= 1 && num2 <= 10) {
//     console.log(`Tablas de multiplicar de ${num2}`);
//     for (let i = 1 ; i <= 10 ; i++) {
//         const add = num2 * i
//         console.log(`${num2} x ${i} = ${add}`);
//     }
// }else {
//     console.log("Invalido");
// }

// let sum1 = 0
// let datos = Number (prompt("Enter a number"))
// while (datos != 0 && !isNaN(datos)) {
//     sum1 += datos 
//     datos = Number (prompt("Enter a number"))

// }

// console.log(sum1);

// let sum = 0
// let dato 
// do {
//     dato = Number (prompt("Enter a number"))
// if (!isNaN (dato)) {
//     sum += dato

// }

// } while (dato !== 0); 
// console.log(sum);

//  const information = {
//      name: `Diana`,
//      lastName: `Lopez`,
//      origin: `Colombia`,
//      studies: `Medicine`
//  }

//  for (const key in information) {
//      console.log(key);
//  }

// for (const key in information) {
//     console.log(information [key]);
// }


// //////////////////////////Difficulty Level: Medium

// let trys = 0
//  let sum2 = 0
//  let datos = Number(prompt("Enter a number"))
//  while (datos != 0 && !isNaN(datos)) {
//      sum2 += datos
//      trys++
//      if (datos > 0) {
//          alert("the number entered is greater than the secret")
//          datos = Number(prompt("Enter a number"))
//      } else if (datos < 0) {
//          alert("the number entered is smaller than the secret")
//          datos = Number(prompt("Enter a number"))
//      }
//  }
//  if (datos === 0 ) {
//      alert ( `You got it right! The secret number was 0 and you made ${trys} attempts`)
//  }

//  let divider = Number (prompt("Enter a number "))
//  let dividers = []

//  for (let i = 1; i <= divider; i++) {
//     if (divider % i === 0) {
//         dividers.push (i)
//     }
//  }
//  console.log(`los divisores de ${divider} son: ${dividers}`);



// function RingBell() {

//     console.log("Ding Dong");
//     return "Ding Dong,"
// }

// let ringBell1 = Number(prompt("Enter a number"))
// let rings = ""

// for (let i = 0 ;i < ringBell1; i++) {
//     rings = rings + RingBell()
//     if (i !== ringBell1 - 1) {
//         rings = rings + ", "

//     }

// }
// console.log(rings);


// const dateLimit = "1997-8-3"
// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let i of dates) {
//     if (i <= dateLimit ) {
//         console.log(i);
//     }
// }


//   let color = ["red", "green", "blue", "violet", "brown", "black", "white"]
// //  for (let i  of color) {
// //      console.log(i);
// //  }



// function colors(color) {
//     for (let i  of color) {
//         console.log(i);
//     }
// }
// colors (color)

// let numbers = [1,7,3,50,5]

// for (let i  of numbers ) {
//     let number = i * 2
//     console.log( `The number is ${i} and its double is ${number}`);
// }

// let family = [{ name: "Pedro", lastName: "Ruiz", age: 49, member: "father" },
// { name: "Juan", lastName: "Ruiz", age: 20, member: "son" },
// { name: "Luisa", lastName: "Perez", age: 39, member: "wife" },
// { name: "Jhon", lastName: "Ruiz", age: 10, member: "son" }
// ]

// function fam(family) {
//     for (const i of family) {
//         console.log(`Hello I am ${i.name} ${i.lastName} (${i.member}) and I am ${i.age}`);
//     }
// }

// fam(family)

// //////////////////////////Difficulty Level: High

// let number1
// let par = 0
// let impar = 0

// do {
//     number1 = Number(prompt("Enter a number"))
//     if (number1 !== 0) {
//         if (number1 % 2 === 0) {
//             par += number1
//         } else {
//             impar += number1
//         }
//     }
// } while (number1 !== 0);

// console.log( `Numero par: ${par} `);
// console.log(`Numero impar ${impar}`);


let number4 = [1,2,8,90,65,75,32,89,22,43]
let result = number4[0]

for (const i of number4) {
    if (i > result) {
        result = i
    }
}
console.log(result);