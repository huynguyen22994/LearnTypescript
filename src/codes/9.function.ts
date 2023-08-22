/*
    Những điểm cần lưu ý khi làm việc với function trong TypeScript
    1. Những function dùng trong TS nếu có return thì TS có thể suy luận được kiểu dữ liệu cho kết quả trả về. Nếu kiểu phức tạp thì có thể khai báo.
    2. Đối với function ko có kết quả trả về thì TS sẽ hiểu là kiểu void
    3. Optional and default parameter => có thể truyền tham số hoặc ko cần truyền bằng cách dùng dấu "?"
    4. Type void and never
    5. Destructuring parameters
*/

// # VD 1 - Ko có kết quả trả về sẽ hiểu là void
function sayHello(): void {
    console.log('Hello')
}
// # VD 2 - có kết của trả về là còn số
// Explicit return type
function sum(a: number, b: number):number {
    return a + b
}

const sumEx = (a: number, b: number):number => {
    return a + b
}

// VD 3 - (Optional) Tùy chỉnh tham số truyền vào hàm -> using '?'
const getLengthNumber = (numberList?: number[]): number => {
    return Array.isArray(numberList) ? numberList.length : 0
}
// - Default parameter - Mặc định tham số truyền vào
const getLengthNumberEx = (numberList: number[] = []): number => {
    return numberList.length
}
// Dùng cả 2 cách Option và Default vào cùng 1 function TS sẽ báo lỗi. Ví dụ
// const getLengthNumberEx1 = (numberList?: number[] = []): number => {
//     return numberList.length
// }

// VD 4
// Void: nếu hàm có return nhựng ko trả về giá trị nào hết thì TS sẽ hiểu hàm đó là void
const execFun = (n: number) => {
    const a = n*n
    return
}
// Never: 
type NewType = number & string // kiểu dữ liệu là never vì 2 number và string ko có họ hàng với nhau
function fail(msg: string): never {
    throw new Error // Vì ném lỗi nên kiểu dữ liệu sẽ là never
}

// VD 5: Destructuring parameter -> cách này sẽ giúp khi dùng hàm thấy tên các biến sẽ để hiểu code hơn
const createStuden = (student: { id: number, name: string, age: number }): void => {
    const { id, name, age } = student;
    console.log(id, name, age)
}
createStuden({
    id: 1, name: 'Huy', age: 29
})
const createStudenExtra = ({ id, name, age }: { id: number, name: string, age: number }): void => {
    console.log(id, name, age)
}
createStudenExtra({
    id: 1, name: 'huy', age: 10
})

// Class
interface Student {
    readonly id: number;
    name: string
}
class StudenName implements Student {
    public id: number;
    public name: string
    constructor(studen: { id: number, name: string }) {
        const { id, name } = studen
        this.id  = id
        this.name = name
    }
    public shout(): void {
        console.log('Wooaaaaaa')
    }
    private isValid(): boolean {
        return true
    }
}

const newStudent = new StudenName({ id: 1, name: 'Huy' })
newStudent.shout();
