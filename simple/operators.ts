interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let myName: PersonKeys = 'name';
myName = 'age';

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// exclude keys
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAt'>

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u: UserKeysNoMeta = 'name';
// error
// u = '_id';
