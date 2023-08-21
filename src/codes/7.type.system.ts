(function() {
/*
    1. Type system overview
    2. Type Alilas vs Interface
    3. Function
    4. Enum
    5. Generics
    6. Utility types
    7. And more
*/

/*
    Kiểu dự liệu thường gặp
     . Kiểu dữ liệu JS
       1. Primitive (Nguyên thủy): là kiểu dữ liệu thuần được lưu vào Stack. 
        - number, boolean, string, nul, undefined, symbol ...
       2 Reference (Tham chiếu): là kiểu dữ liệu phức tạp hơn được lưu là HEAP và quản lý bằng con trỏ
        - Array, object, function
     . Còn typescript thì có thêm 1 vài kiểu dữ liệu bổ sung:
       - any, unknown, void, never ... còn nữa :)))   
*/
// Ví dụ cho kiểu dử liệu any
let count:any = 5
count = 'five' // ở đây TS ko báo lỗi vì kiểu dữ liệu khai báo là any nên có thể gán lại bằng bất cứ giá trị mới là kiểu dự liệu nào cũng dk

// Với 3 kiểu dữ liệu cơ bản như number, string ,boolean thì khi tảo biến ko cần thiết phải thêm kiểu dữ liệu vào vì TS đủ thông minh để khởi tạo đúng kiểu dữ liệu cho các biến đó

// Literal type -> giống enum .ví dụ
let num: 1; // khi này ko thể gán biến num cho bất kì giá trị nào ngoài 1 => giống như cùng const num = 1

const student = {
    name: "Huy",
    age: 29
} // mặc dù dùng condt nhưng những thuộc tính của object vẫn được thay đồi. Nếu ko muốn thuộc tính thay đổi được thì làm theo cách bên dưới

const studentCannotChange = {
    name: "Huy",
    age: 29
} as const // thêm toán tử này ko thể thay đổi dk, chỉ có thể đọc

const students = [1, 2, 3] // có thể thay đổi dk
const students1 = [1, 2, 3] as const // ko thể thay đổi giá trị bên trong dk

})()
