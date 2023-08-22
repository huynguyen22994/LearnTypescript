/*
    Enum in TypeScript
    1. Number enum
    2. String enum
    3. When to use enum
    4. How enum complied to Javascript
*/

// #1. Number enum
enum Status {
    PENDING,
    INPROGRESS = 10,
    DONE = 60,
    CANCLED = 'Huy'
}
console.log(Status.PENDING)
console.log(Status.INPROGRESS)
console.log(Status.DONE)
console.log(Status.CANCLED)