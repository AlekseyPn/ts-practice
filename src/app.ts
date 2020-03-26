// try tsconfig;
console.log("App.ts");

class Person {
    constructor(private name: string) {
    }
}

// comment
const max: Person = new Person("Max");

const btn: Element = document.querySelector("#btn")!;

btn.addEventListener("click",() => {
    console.log("Btn clicked")
});

function log(data: any) {
    console.log(data)
}

log("kukukuuuu");