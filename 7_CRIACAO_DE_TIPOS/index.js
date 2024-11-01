// 1 - generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData('teste'));
// 2 - constraint em generic
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: 'Porta', cor: 'Branca' };
var myObj2 = { name: 'Porta', valor: 10.00 };
var myObj3 = { name: 'Porta' };
console.log(showProductName(myObj));
console.log(showProductName(myObj2));
console.log(showProductName(myObj3));
var myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
var myPen = { name: 'Fusca', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return "".concat(obj[key]);
}
var myChar = {
    name: 'David',
    age: 27,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// console.log(showCharName(myChar, 'teste'))
// 6 - typeof type operator
var userName = 'David';
var userName2 = 'João';
var userName4 = 'Lucas';
var newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de: ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
