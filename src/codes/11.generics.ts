/*
    Generic: là kiểu dữ liệu nhưng lại có thể nhận vào tham số và trả về kiểu dữ liệu tương tự
    1. Generic
    2. keyof operator
    3. typeof operator
    4. Mapped types  
*/

// 1. Generic - Ví dụ về cách dùng
interface Student {
    readonly id: number,
    name: string,
    getName?: (id: number) => string
}
const studentList: Array<Student> = [ // Sử dụng cách Array<Student> đây là cách khai báo của Generic
    { id: 1, name: 'Alice' },
    { id: 1, name: 'Alice 1' },
]
const numberList1: Array<number> = [1, 2, 4, 5,] // Đây là cách khai báo biến theo Generic
// Thử định nghĩa 1 generic giống Array phía trên
interface CustomList<T, K> {
    length: number;
    [index: number]: T | K; // T là một kiểu dữ liệu tùy ý truyền từ ngoài vào
}
const numberList12: CustomList<number, string> = [1 ,2, 3, 'test']

// 2. keyof operator - khi dùng keyof sẻ lấy ra danh sách thuộc tính của interface
// Ví dụ:
type StudentKey = keyof Student
const keys: StudentKey = 'id'
console.log(keys)

// 3. typeof operator
console.log(typeof 123) // number
console.log(typeof 'Huy') // string
console.log(typeof window !== undefined) // true on client side, false on server side

// 4. Mapped type
// Dùng index signature để định nghĩa kiểu dữ liệu có props lấy từ kiểu dữ liệu khác
type MappedType = {
    [Key in keyof Student]: boolean // lấy lại 2 thuộc tính id và nam của Student nhưng sét lại kiểu cho 2 thuộc tính đó là boolean
}