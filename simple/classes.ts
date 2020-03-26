class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel
    }
}

class CarShort {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

// ===============================

class Animal {
    // for animal and subclasses, not available for set within class
    // const anim = new Animal(); anim.voice - this is error;
    protected voice: string = '';

    public color: string = 'black';

    constructor() {
        this.go();
    }

    // we can call it only from this class instance methods
    private go(): void {
        console.log('go')
    }

    // from this
    callGo(): void {
        this.go();
    }
}

const anim = new Animal();
anim.callGo();

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);

// ===============================

// only for extends not compile, for develop
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log("render component")
    }
    info(): string {
        return "This is info";
    }
}