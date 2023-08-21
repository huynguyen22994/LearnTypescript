/*
    Title => Explicit types vs Infered types
        1. Explicit types
        2. Infered types
        3. Eraised types => Những định nghĩa type trong TS khi compile sang JS thì mất sạch
        4. Downleveling => đưa code TS xuống level thấp hơn để có thể chạy trên môt trường mà node hoặc trình duyệt hổ trợ ví dụ như dứa xống ES5 or ES6
*/

//  1. Explicit types => Sử dụng kiệu dữ liệu tường minh, rõ ràng
/*
    Cách dùng khai báo kiểu dự liệu trong TS:
    VD: 
*/
    const count: number = 123;
    const studenName: string = 'Huy Nguyễn'
    const isStudent: boolean = true
    const numberList: number[] = [1, 2, 3]

// 2. Infered types => Kiểu dữ liệu suy luận
/*
    Typescript thông minh tự detect được kiểu dự liệu tương ứng ngay khi không khai cụ thể kiểu dự liệu cho một biến
    VD:
*/
const count1 = 1234 // => khi hover chuột vào biến count1 nó sẽ hiện thị tooltip gọi ý detect kiểu dữ liệu
const studenName1 = 'Huy 123'
const namuberList1 = [1, 2, 34, 5]