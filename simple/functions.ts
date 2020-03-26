function add(a:number, b:number):number {
    return a + b;
}

function toUpperCase(str: string):string {
    return str.trim().toUpperCase()
}

interface IMyPos {
    x: number | undefined,
    y: number | undefined
}

interface IMyPosDef extends IMyPos {
    default: string,
}
// overload
function position(): IMyPos
function position(a: number): IMyPosDef
function position(a: number, b: number): IMyPos
function position(a?:number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b}
}

console.log('Empty', position());
console.log('One', position(42));
console.log('Two', position(42, 35));
