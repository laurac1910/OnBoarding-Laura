
// // //////////////////////////////Difficulty Level: Low

// let number1 = 100;
// let number2 = 20;

// const add = function (number1, number2) {
//     console.log(number1 * number2);
// }

// add(number1, number2)

// function add2(number1, number2) {
//     const add = number1 * number2
//     return add
// }

// const result = add2(number1, number2)
// console.log(result);



// /////////////////////// ////////////////Difficulty Level: Medium

// function greet(name) {
//     console.log(`Welcome back ${name}`);
// }
// greet("laura")

// const add4 = function (a, b) {
//     let add4 = a * b
//     return add4
// }

// const result2 = add4(5, 5)
// console.log(result2);

// function area(base, height) {
//     const area2 = base * height / 2
//     return area2
// }

// const resultArea = area(10, 15)
// console.log(`The area of the triangle is ${resultArea}`);

// function perimeter(sideA, sideB, sideC) {
//     const perimeter2 = sideA + sideB + sideC
//     return perimeter2
// }

// const resultPerimeter = perimeter(20, 20, 30)
// console.log(`The perimeter of the triangle is ${resultPerimeter}`);

// const chips = 22
// const price = 3.50

// function store(price, chips) {
//     const total = price * chips
//     return total
// }

// const total = store(chips,price)
// console.log(total);

// const discount = 10 /100 * total
// if (chips >= 10 && chips <=20 )  {
//     console.log(`Your total is ${total} and we give to you a discount of 10% then your total is ${total - discount} `);
// }

// const discount20 = 20 /100 * total

// if (chips >= 21) {
//     console.log(`Your total is ${total} and we give to you a discount of 20% then your total is ${total - discount} `);

// }



// function inAnAdult() {
//     const age = Number (prompt(`Enter your age`))
//     if  (age >= 18 ) {
//         alert ("You're an adult")
//     } else {
//         alert ("You're a minor ")
//     }
// }

// inAnAdult()


 ///////////////////////////////////////Difficulty Level: High


//  function income(annual) {
//      return annual
//  }
//  const annualIncome = income (22000)
//  console.log(annualIncome);

//  function income2() {
//     annualIncome
//      if (annualIncome <= 10000)  {
//          const discount10= 10/100 * annualIncome
//          console.log(` your have to pay ${discount10}`);
//      } else if (annualIncome >= 10000 && annualIncome <= 20000) {
//          const discount15= 15/100 * annualIncome
//          console.log(` your have to pay ${discount15}`);
//      }else if (annualIncome > 20000) {
//          const discount20= 20/100 * annualIncome
//          console.log(` your have to pay ${discount20}`);
//      }
//  }

//  const result3 = income2 ()


//  function tax (income) {
//      if ( income <= 10000 ) {
//          console.log( `You have to pay ${10/100 * income }` );
//      } else if (income >= 10000 && income <= 20000) {
//          console.log(`You have to pay ${15/100 *income}`);
//      } else if (income > 20000) {
//          console.log(`You have to pay ${20/100 * income}`);
//      }
//      return income 
//  }


//  const income =  22000
//  tax (income)

//  const day = 3

//  function days(day) {
//      if (day >= 1 && day <= 5) {
//          console.log("It is a business day");
//      } else {
//          switch (day) {
//              case 6:
//                  console.log("It's the weekend.");
//                  break;
//              case 7:
//                  console.log("It's the weekend.");
//                  break;

//              default:
//                  console.log("It's invalide");
//                  break;
//          }
//      }
//  }

//  days(day)


//  function personalData(dat1,dat2,dat3) {
//      const info = { dat1, dat2, dat3 }

//  if (dat1 === "" || dat1 === " ") {
//      console.error("The name cannot be empty")
//      return
//  } else if (dat2 === "" || dat2 === " ") {
//      console.error("The lastname cannot be empty")
//      return

//  } else if (isNaN (dat3) || dat3 === "" || dat3 === " ") {
//      console.error("The age is invalide ")
//      return

//  } else {
//  info.dat1 = dat1;
//  info.dat2 = dat2;
//  info.dat3 = dat3;
//  console.log(info);
//  }
//  }


//  let name = prompt ("Enter your name")
//  let lastname = prompt ("Enter your lastname")
//  let age = Number (prompt ("Enter your age"))
//  personalData (name,lastname,age)



// function hello( name) {
//     return `Hi, my name is ${name}`
// }

// function age(birthYear,currentYear) {
//     return currentYear-birthYear
// }

// function greet() {
//     let enterName = prompt (`Enter your name`)
//     let enterBirthYear = Number (prompt (`Enter your birth year`))
//     alert (`${hello (enterName)} and I'am ${age (enterBirthYear,2023)}year's old`)
// }

// greet ()