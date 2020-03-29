/// <reference path="./form-namespace.ts"/>

namespace Form {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';

        constructor(public email: string) {
        }

        getInfo(): IFormInfo {
            return {
                type: this.type,
                state: this.state,
            }
        }
    }

    export const myForm = new MyForm('1@w.ru');
}

console.log(Form.myForm);