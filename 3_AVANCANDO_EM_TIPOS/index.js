// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var nomes = ['David', 'Charles'];
nomes.push('Monteiro');
console.log(nomes);
// 2 - outra sintaxe array
var nums = [6, 5, 8];
nums.push(4);
console.log(nums);
// 3 - any
var arr1 = [1, "teste", true, [], { nome: "David" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log("A soma dos valores \u00E9 ".concat(a + b));
}
soma(5, 6);
// 5 - retorno de função
function greeting(name) {
    // return 5
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("David"));
// 6 - função anônima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { name: 'David', surname: 'Charles' };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("B: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(5, 6);
// showNumbers(7)
// 9 - validando argumento opcional
// OBS. o primeiro parâmetro nunca pode ser opcional
function advancedGreeting(firstName, lasName) {
    if (lasName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lasName, ", tudo bem?");
    }
    return "Ola, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting('David', 'Charles'));
console.log(advancedGreeting('David'));
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da consta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
// showBalance(true)
var arr2 = [1, 'teste', true];
// 11 -  avancando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return "\u00C1 fun\u00E7\u00E3o do usu\u00E1rio \u00E9 : ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('200');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: 'David', age: 30 };
console.log(somePerson);
// type personType = {
//     name: string
// }
// 15 - literal types
var test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9 : ".concat(direction));
}
showDirection('left');
// showDirection('top')
// 16 - non null assertion  operators
var p = document.getElementById('some-p');
console.log(p.innerText); // aparecer no console.log pegando do html
// 17 - bigint
var n;
// n = 1
n = 1000n;
console.log(n);
// 18 - symbol
var symbolA = Symbol('a');
var symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
