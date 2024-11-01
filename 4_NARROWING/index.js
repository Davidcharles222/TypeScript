var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma!');
    }
}
sum('4', '59');
sum(12, 66.5);
sum('5', 6);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === 'multiply') {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3]);
operations([3, 3, 3], "sum");
operations([3, 3, 3], "multiply");
// 3 - instance of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User('Jhon');
var paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 ".concat(user.name, ", deseja ver os dados do sistema?"));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name));
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log('O cachorro é um SRD');
    }
}
showDogDetails(turca);
showDogDetails(bob);
