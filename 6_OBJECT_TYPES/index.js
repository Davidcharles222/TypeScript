function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailabre) {
        console.log('O produto está disponível');
    }
}
var shirt = {
    name: 'camisa',
    price: 19.99,
    isAvailabre: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9:".concat(user.role));
    }
}
var u1 = { email: 'david@gmail.com', role: 'Admin' };
var u2 = { email: 'david@gmail.com' };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: 'VW',
    wheels: 4
};
// fusca.wheels = 5 propriedade somente leitura, não possível modificar
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var david = {
    name: 'David',
    age: 27
};
console.log(david);
var goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama']
};
console.log(goku);
console.log(goku.superpowers[1]);
var arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
var myArray = ['Maça', 'Laranja', 'Banana'];
// myArray[3] = 'mamão' modificações diretas não são aceitas
myArray.forEach(function (item) {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, "teste"]
console.log(myNumberArray);
var anotherUser = ['David', 27];
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
