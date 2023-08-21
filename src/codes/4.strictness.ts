/*
    Strictness
    1. strict flag là gì
    2. Option: noImplicaitAny
    3. Option: strictNullChecks
    4. Option: alwayStrict
    5. Other options
    6. Summary
*/

// 1. Strict flag 
/*
    Config string trong file tsconfig.json
    - Bật strict=true sẽ bật tất cả option liên quan tới strict lên true
    - Mặc định các options liên quan dtoi71 strict là false, nhưng recomend sử dụng tru
    - Config từng option sẽ ưu tiên cao hơn so với "strict=true". Tức "strict=true", mà "noImplicitThis=false" thì giá trị cuối cùng là "noImplicitThis=false"
*/

// 2. Option: noImplicaitAny
/*
    Option này dùng khi typescript không thể xác định kiểu dữ liệu của một biến nào đó, thì nó sẽ sử dụng mang kiểu dữ liệu any
    . Bật lên true, nó sẽ báo lỗi trường hợp này xảy ra và ngược lại sẽ bỏ qua lỗi này
*/

// 3. Option: sctrictNullChecks
/*
    . Khi bật true lên thì sẽ báo lỗi khi null/undefined được sử dụng không đúng. Ví dụ như gọi những hàm number, string, array, ... chẳng hạn
    . Khi config false thì sẽ bỏ qua, nhưng có rủi ro xảy ra lúc runtime
*/

// 4. Option: alwayStrict
/*  
    . Khi bật true lên thì typescript sẽ luôn luôn parse files ở chế độ strict mode và sẽ có 'use strict' ổ đầu file javascript được tạo ra
*/