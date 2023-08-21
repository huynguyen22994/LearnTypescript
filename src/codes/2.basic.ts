/*
    Basic about TS
        1. Static type checking
        2. Types of Tooling
        3. tsc - typescript compiler
        4. Emitting with Errors
*/

// #1. Static type checking => GIÚP TRÁNH LỖI TYPO
/*
    Vd: 
    const a = ''
    a() // => Báo lỗi ngay lúc code, việc mà JS ko làm dk
    const b = undefined
    b.length
    const c = 'abc'
    c.toLowercase // => gợi ý dùng đúng tên hàm
*/

// #2. Types of Tooling
/*
    Typescript hổ trợ auto compeletion và suggestions để giúp nhắc => JS ko hỗ trợ nhiều việc nhắc code
*/

// #3 tsc - type script compler
/*
    Để setup những file js được compiled khi chạy lệnh tsc đến thư mục nào thì mình sẽ vào file
    -> tsconfig.json setup thuộc tính "outDir" 
*/



