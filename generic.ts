const numbers: Array<number> = [1,1,2,3,5];
const strings: Array<string> = ['Hello', 'Alex'];
const booleans: Array<boolean> = [true, false,true];

function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

reverse(numbers);
reverse(strings);
reverse(booleans);