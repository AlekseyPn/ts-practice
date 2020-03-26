const str: string = "Hello";
const isFetching: boolean = true;
const isLoading: boolean = false;

const int:number = 42;
const float: number = 4.3;
const num: number = 3e10;

const message: string = "Hello TS";

const numbers: number[] = [1,1,2,3,5,8,13];
// is generic types
const numbers2: Array<number> = [1,1,2,3,5,8,13];

const words: string[] = ["Hello"];

//Tuple
const contact: [string, number] = ["Val", 1234444];

let a: any = 42;
a = "Hello";

function say(name: string):void {
    console.log(name)
}

say("Алекс");


// Never - for error or infinite function
function throwErr(message: string): never {
    throw new Error(message)
}

function infinite():never {
    while(true) {

    }
}

type Login = string;

const log: Login = "admin";

type ID = string | number;

const id1: ID = 123;
const id2: ID = "123";

type Some = string | null | undefined;
