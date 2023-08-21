/*
    Type Alias: đặt tên lại cho một kiểu dữ liệu nào đó
    Interface: đặt tên cho một object type
*/

import { type } from "os"

// TYPE ALIAS: bắt đầu bằng ký tự type
// Primitive type (kiệu thuần): 
// Ví dụ
type StudenName = string
type StudentAge = number
type IsTopStudent = boolean

// Object type: thêm ký tự "?." để set biết đó là tùy chọn, kcó thể là kiểu undefined. Thêm "readonly" để sét biến đó ko thay đổi dk => chỉ set lần đầu
type Student = {
    readonly id: number; // đấu chấm phẩy
    name: string;
    age?: number // optional
}
interface Student1 {
    readonly id: number;
    name: string;
    age?: number // optional
}

// Cách dùng
const studenA: Student = {
    id: 1,
    name: 'Huy'
}
const studenB: Student1 = {
    id: 2,
    name: 'Huy 1'
}
console.log(studenA)
console.log(studenB)



// # Union Type ( dùng dấu | ) : là kiểu dữ liệu mình tự định nghĩa mà từ kiểu này có thể sử dụng như nhiều kiểu khác. Ví dụ
type dinamicString = string | number | boolean
interface StudentC {
    readonly id: number,
    name: dinamicString,
    age?: dinamicString,
    gender: 'male' | 'female'
}

// # Intersection Type ( dùng dấu & ) : dùng để tạo ra một kiểu dữ liệu mới nhưng các thuộc tính được gom lại từ một kiểu dữ liệu tồn tại trước đó
// => khác giống kế thừa
type SuperStudent = Student & Student1 & StudentC
const superStudent: SuperStudent = {
    id: 1,
    name: "Huy",
    gender: 'male'
}

// # Đối Interface thì có thể dùng Declaration merging -> nghĩ là khi định nghĩa 1 interface mình có thể định nghịa thêm thuộc tính cho nhựng lần sau
// Alias type ko làm dk vậy -> nên dùng interface vì dể mở rộng
// Ví dụ
interface Person {
    name: string,
}
interface Person {
    age: number // Lúc này thêm thuộc tính age cho interface Person
}
const alice: Person = {
    name: 'Alice',
    age: 10
}