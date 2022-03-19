const sayHello = () => {console.log ("hello")};
const sayHello2 = () => 'cześć'
console.log (sayHello() + ", Marcin")
console.log (sayHello2() + ", Marcin")
// console.log (sayHello3() + ", Marcin")

module.exports = {
    sayHello,
    sayHello2,
}
console.log()