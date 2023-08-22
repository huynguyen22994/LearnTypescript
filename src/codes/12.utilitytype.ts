/*
    Utility Type
    1. Partial : Là cách set tất cả props of Type thành optional hết
    2. Required : Là cách set tất cả props of Type thành required hết
    3. Readonly : Là cách set tất cả props of Type thành readonly hết
    4. Record<Key, Type>
    5. Pick<Type, Keys>
    6. Omit<Type, Key>
    7. ReturnType -> lấy được loại kết quả trả về của một hàm nào đó
*/

import { type } from "os"

// #1,2,3 Cách dùng
interface Student {
    readonly id: number,
    name: string,
    getName?: (id: number) => string
}
const student1: Partial<Student> = { name: 'Huy' }
const student2: Required<Student> = { id: 1, name: 'Huy 123', getName(id) {
    return 'Huy'
}, }
const student3: Readonly<Student> = { id: 1, name: 'Huy 1' }

// #4 Reacord<Keys, Type> 
// Ví dụ
interface Cat {
    id: number;
    name: string
}
type CatNames = 'blackcat' | 'whitecat' | 'browcat'
const catList: Record<CatNames, Cat> = {
    blackcat: { id: 1, name: 'Cat black' },
    whitecat: { id: 1, name: 'Cat white' },
    browcat: { id: 1, name: 'Cat brow' }
}
catList.blackcat

// #5 Pick<Type, Key>
// Ví dụ: tạo ra 1 type mới với nhựng thuộc tính muốn lấy của Cat
const catObj1: Pick<Cat, 'id' | 'name'> = {
    id: 1,
    name: 'Cat 1'
}

// #6 Omit<Type, Key> : lấy tất cả nhưng trừ ra nhửng key ko muốn lấy
const catObj2: Omit<Cat, 'id'> = {
    name: 'cat 1'
}