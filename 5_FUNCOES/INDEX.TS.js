var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno!');
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'David');
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement('teste'))
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: 'David' }, { age: 27, job: 'Programador' });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// console.log(biggestNumber(true, false))
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
console.log(modernGreeting('David'));
// 7 - parametro default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 5]);
doSomething('1');
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
showErrorMessage('Algum erro!');
// 10 - Rest operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(8, 565, 889));
// 11 - destructuring como parametro
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custa R$").concat(price);
}
var shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
