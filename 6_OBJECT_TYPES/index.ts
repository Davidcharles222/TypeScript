// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailabre: true
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailabre){
        console.log('O produto está disponível')
    }
}

const shirt: Product = {
    name: 'camisa',
    price: 19.99,
    isAvailabre: true
}

showProductDetails(shirt)

// 2 - propriedade opcional em interface
interface User{
    email: string
    role?:string
}

function showUserDetails(user:User){
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuário é:${user.role}`)
    }
}

const u1: User = {email: 'david@gmail.com', role: 'Admin'}
const u2: User = {email: 'david@gmail.com'}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number // propriedade somente leitura, não possível modificar
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

// fusca.wheels = 5 propriedade somente leitura, não possível modificar
console.log(fusca)

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste' so aceita do tipo number

// 5 - extending interfaces
interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const david: Human = {
    name: 'David',
    age: 27
}

console.log(david)

const goku: SuperHuman = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama']
}

console.log(goku)

console.log(goku.superpowers[1])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun // união de interfaces

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

// myArray[3] = 'mamão' modificações diretas não são aceitas

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas

type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, "teste"]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['David', 27]

console.log(anotherUser)

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])