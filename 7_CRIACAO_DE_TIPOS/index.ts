// 1 - generics
function showData<T>(arg: T): string { // converte o retorno em string
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('testando generic'))
console.log(showData(true))
console.log(showData('teste'))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) { // precisa tem um tipo name c/ string
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'Porta', cor: 'Branca'}
const myObj2 = {name: 'Porta', valor: 10.00}
const myObj3 = {name: 'Porta'}

console.log(showProductName(myObj))
console.log(showProductName(myObj2))
console.log(showProductName(myObj3))

// 3 - generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco'}
const myPen: Pen = {name: 'Fusca', wheels: false, engine: false, color: 'Azul'}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C):string{
    return `${obj[key]}`
}

const myChar: Character = {
    name: 'David',
    age: 27,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))
// console.log(showCharName(myChar, 'teste'))

// 6 - typeof type operator
const userName: string = 'David'
const userName2: typeof userName = 'João'
// const userName3: typeof userName = 10

type x = typeof userName
const userName4: x = 'Lucas'

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
}

function showKm(km: km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? Number : string

const someVar: myType = 5
// const comeVar2: myType = 'teste'

type myTypeB = Teste extends {showNumber(): number } ? string : boolean

// 9 - template literals type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
// const testing2: CustomType = 'some text2'

type a1 = 'Testando'
type a2 = 'Union'

type a3 = `${a1}` | `${a2}`