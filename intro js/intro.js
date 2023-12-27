
////////////////// Difficulty Level: Low

const myFirtsName = "laura"
const myLastName = "camargo"
const myAge = 22


const myPet = "coco"
const myPetAge = 1


let myFullName = myFirtsName + " " + myLastName
console.log(myFullName);

const presentationText = "Hola,mi nombre es" + " " + myFirtsName + " " + myLastName + " " + "tengo" + " " + myAge + " " + "años" + " " + "Tengo una gatita llamada" + " " + myPet + " " + " ella tiene" + " " + myPetAge + " año"
console.log(presentationText);


/////////////////////// Difficulty Level: Medium

console.log(myAge * myPetAge);
console.log(myAge + myPetAge);
console.log(myAge - myPetAge);
console.log(myAge / myPetAge);
console.log(myPetAge / myAge);


let student = {
    name: "laura",
    lastName: "camargo",
    age: 22,
    shift: "mornign",
    teacher: "Nicolas"
}
console.table(student)


let pet = {
    name: "Coco",
    breed: "domestic short hair",
    age: 1,
    color: "gray",
    eyeColor: "yellow"

}
console.table(pet)


let fruits = [`banana`, `apple`, `strawberry`, `orange`, `blackberry`]
console.log(fruits[3]);


let fruitBanana = "banana"
let fruitApple = "apple"
let fruitStrawberry = "strawberry"
let fruitOrange = "orange"
let fruitBlackberry = "blackberry"

let fruit = fruitBanana + " " + fruitApple + " " + fruitStrawberry + " " + fruitOrange + " " + fruitBlackberry
console.log(fruit);


// /////////////////////////Difficulty Level: High


let iAmAdult =  prompt("enter your age" ) >=18
console.log(`I am adult ${iAmAdult}`);



let numbers = [`uno`, `dos`, `tres`, `cuatro`, `cinco`]
console.log(numbers[1]);
console.log(numbers);


let family = [ 
    {
        name: "Diana Camargo",
        age: 50,
        hairColor: "red"
    },
    {
        name: "Alejandra Camargo",
        age: 32,
        hairColor: "brown"
    },
    {
        name: "Juan Camargo",
        age: 23,
        hairColor: "blond"
    },
    {
        name: "Juanita Loaiza",
        age: 10,
        hairColor: "brown"
    },
    {
        name: "Martin Garay",
        age: 6,
        hairColor: "red"
    }

]
console.log(family[4]);



let randomText = `${fruits[1]} ${numbers [3]} ${family [4].name}`
console.log(randomText);

