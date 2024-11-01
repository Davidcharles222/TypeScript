"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
var greet_1 = require("./greet");
(0, greet_1.default)();
// 2 - import de variaveis
var variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - multiplas importações
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - alias
var changename_1 = require("./changename");
console.log(changename_1.someName);
// 5 - import all
var myNumbers = require("./numbers");
console.log(myNumbers);
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var joao = new User('João', 25);
console.log(joao);
