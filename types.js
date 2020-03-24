var str = "Hello";
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.3;
var num = 3e10;
var message = "Hello TS";
var numbers = [1, 1, 2, 3, 5, 8, 13];
// is generic types
var numbers2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello"];
//Tuple
var contact = ["Val", 1234444];
var a = 42;
a = "Hello";
function say(name) {
    console.log(name);
}
say("Алекс");
// Never - for error or infinite function
function throwErr(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var log = "admin";
var id1 = 123;
var id2 = "123";
