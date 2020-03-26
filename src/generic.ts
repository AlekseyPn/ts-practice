// const cars: string[] = ["Ford", "Audi"];
// const cars2: Array<string> =["Ford", "Audi"];
//
// const promise: PromiseLike<string> = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Resolved")
//     }, 2000)
// });
//
// promise.then(data => {
//     console.log(data.trim().toUpperCase())
// });

// return type : T & U
// T extends 'typeName' it is constraints by some type
function mergeObjs<T extends object, U extends object>(a: T, b: U) {
    return Object.assign(a, b);
}

const objm = mergeObjs({name: "Alp"}, {age: 29});
const merg = mergeObjs({ model: "Ford"}, {year: 2010});
console.log(objm);
console.log(merg.model, merg.year);

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `This object has ${value.length} symbols`
    }
}

console.log(withCount("Hello Andrey"));
console.log(withCount(new Array(500)));

// ==============================================
// we make generic type for check that object has keys from T, for example if we has object
// person with name or age props, we got type U 'name' | 'age'
function getObjectValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const person = {
    name: "Alex",
    age: 29,
    job: "Javascript"
};

console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
console.log(getObjectValue(person, "job"));

// ============================================

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item);
    }

    get items(): T[] {
        return this._items;
    }
}

const strings = new Collection<string>(["I", "Am"]);
strings.add("!");
strings.remove("Am");
console.log(strings.items);

const nums = new Collection<number>([1,2]);
nums.add(3);
nums.remove(1);
console.log(nums.items);
// error
// const objs = new Collection([{a: 1,}, {b: 2}]);
// obis.remove({b: 2});
// console.log(obis.items);

interface Car  {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    // temp obj which doesnt have some fields from Car type
    const car: Partial<Car> = {};
    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }
    // as because car might not has one of fields from Car interface
    return car as Car;
}

// ===================================
