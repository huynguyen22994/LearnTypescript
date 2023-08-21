/*
    Destructuring
    1. Object destructuring
    2. Array destructuring
    3. Rest vs Spread operator
*/

// OBJECT
const bob = {
    id: 1,
    nameB: 'Huy',
    age: 29,
    gender: 'male'
}

// Old Way
const id1 = bob.id
const nameBob = bob.nameB
const rest1 = {
    age: bob.age,
    gender: bob.gender
}

// Destruturing with Rest
const { id, nameB, ...rest } = bob


// Spread use to clone object
const bob2 = {
    ...bob,
    name: 'Huy 1243' // "name" here to override name of bob
}

// ARRAY
const students = ['Huy', 'Huy1', 'Huy 2']

// Destruturing with Rest
const [ i1, ...i2 ] = students

// Spread to clone array
const newArray = [...students, 'Huy 3']

// Can using Destructuring to swap 2 variable. VD
let a:number = 5, b: number = 10
// Old way
let temp: number = a // 5
a = b // 10
b = temp // 5
// New way
// [b, a] = [a, b]