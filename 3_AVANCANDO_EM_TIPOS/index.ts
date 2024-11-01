// 1 - arrays
let numbers: number[] = [1,2,3]
numbers.push(5)
console.log(numbers[2])

const nomes: string[] = ['David', 'Charles']
nomes.push('Monteiro')
console.log(nomes)

// 2 - outra sintaxe array
const nums: Array<number> = [6,5,8]
nums.push(4)
console.log(nums)

// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "David"}]
console.log(arr1)
arr1.push([1,2,3])
console.log(arr1)

// 4 - parametros tipados
function soma(a:number, b:number){
    console.log(`A soma dos valores é ${a+b}`)
}

soma(5,6)

// 5 - retorno de função
function greeting (name:string): string{
    // return 5
    return `Olá ${name}`
}

console.log(greeting("David"))

// 6 - função anônima
setTimeout(function(){
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("X coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

const pessoaObj: {name: string, surname: string} = {name: 'David', surname: 'Charles'}

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("B: " + c)
    }
}

showNumbers(1,2,3)
showNumbers(5,6)
// showNumbers(7)

// 9 - validando argumento opcional
// OBS. o primeiro parâmetro nunca pode ser opcional
function advancedGreeting(firstName: string, lasName?: string){

    if(lasName !== undefined){
        return `Olá, ${firstName} ${lasName}, tudo bem?`
    }

    return `Ola, ${firstName}, tudo bem?`
}

console.log(advancedGreeting('David', 'Charles'))
console.log(advancedGreeting('David'))

// 10 - union type
function showBalance(balance: string | number){
    console.log(`O saldo da consta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, 'teste', true]

// 11 -  avancando em union types
function showUserRole(role: boolean | string){

    if(typeof role === 'boolean'){
        return 'Usuário não aprovado!'
    }

    return `Á função do usuário é : ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))

// 12 - type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId('200')

// 13 - interface
interface Point{
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias
interface Person{
    name: string
}

interface Person{
    age: number
}

const somePerson: Person = {name: 'David', age: 30}
console.log(somePerson)

// formado alias não aceita novos valores
type personType = {
    name: string
}

// type personType = {
//     name: string
// }

// 15 - literal types
let test: 'testando'
test = 'testando'
console.log(test)

function showDirection(direction: 'left' | 'right' | 'center'){
    console.log(`A direção é : ${direction}`)
}

showDirection('left')
// showDirection('top')

// 16 - non null assertion  operators
const p = document.getElementById('some-p')

console.log(p!.innerText) // aparecer no console.log pegando do html

// 17 - bigint
let n: bigint

// n = 1
n = 1000n
console.log(n)

// 18 - symbol
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)