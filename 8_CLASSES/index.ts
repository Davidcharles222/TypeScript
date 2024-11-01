// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const david = new User()

console.log(david)

david.name = 'David'
// david.job = 'Programador' não pode criar variaveis que não tenha na classe

console.log(david)

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser('João', 22)
console.log(joao)

// const pedro = new NewUser(12)

// 3 - campo readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car('Fusca')
console.log(fusca)
fusca.name = 'Fusca turbo'
// fusca.wheels = 5

// 4 - herança e super
class Machine {
    name 

    constructor(name: string){
        this.name = name
    }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine{
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(trator)
console.log(destroyer)

// 5 - métodos
class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting(){
        console.log('Hey Stranger!')
    }
}

const jimmy = new Dwarf('Jimmy')
console.log(jimmy.name)

jimmy.greeting()
console.log(jimmy)

// 6 - this
class Truch {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}

const volvo = new Truch('Volvo', 400)
volvo.showDetails()

// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name +' '+this.surname
    }
}

const matheusBattisti = new Person('David', 'Charles')
console.log(matheusBattisti.name)
console.log(matheusBattisti.fullName)

// 8 - setter
class Coords {
    x!: number
    y!: number

    set fillx(x: number){
        if(x === 0){
            return
        }

        this.x = x

        console.log('x inserido com sucesso')
    }

    set filly(y: number){
        if(y === 0){
            return
        }

        this.y = y

        console.log('y inserido com sucesso')
    }

    get getCoord(){
        return `x: ${this.x} e y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillx = 15
myCoords.filly = 0
myCoords.filly = 10

console.log(myCoords)
console.log(myCoords.getCoord)

// 9 - inplements
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle{
   title

   constructor(title: string){
    this.title = title
   }
    
   itemTitle(){
    return `O título do post é: ${this.title}`
   }

}

// 10 - overrride de métodos
class Base {
    someMethod(){
        console.log('alguma coisa')
    }
}

class Nova extends Base {
    someMethod(){
        console.log('testando outra coisa')
    }
}

const myObject = new Nova()
myObject.someMethod()

// 11 - public
class C {
    public x = 10 // formato padrão
}

class D extends C {

}

const cInstace = new C()
console.log(cInstace.x)

const dInstance = new D()
console.log(dInstance.x)

// 12 - protected
class E {
    protected x = 10

    protected protectedMethod(){
        console.log('Este método é protegido')
    }
}

class F extends E { // precisa invocar por meio de métodos

    showX() {
        console.log('X: '+ this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const fInstance = new F()
fInstance.showX()

fInstance.showProtectedMethod()

// 13 - private
class PrivateClass {
    private name = 'Private'

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log('Método privado')
    }

    showPrivateMethod(){
        this.privateMethod()
    }
}

const pObj = new PrivateClass()
// console.log(pObj.name)

console.log(pObj.showName())
// console.log(pObj.privateMethod())

pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass { Não conseguimos acessar sub classes no private
//     myMethod() {
//         this.privateMetlhod
//     }
// }

// 14 - static members
class StaticMembers {
    static prop = 'Teste static'

    static staticMehtod() {
        console.log('Este é um método estático')
    }
}

console.log(StaticMembers.prop) // sem o static ele não acessa o prop
StaticMembers.staticMehtod()

// 15 - generic class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }

}

const newItem = new Item('caixa', 'surpresa')
console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)
console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

// 16 - parameter properties
class parameterProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty(){
        return `Qtd total: ${this.qty}`
    }

    get showPrice(){
        return `Qtd total: ${this.price}`
    }
}

const newShirt = new parameterProperties('Camisa', 5, 12.99)
console.log(newShirt.name)
// console.log(newShirt.price)

console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - myClass expressions
const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass('Jones')

console.log(pessoa)
console.log(pessoa.name)

// 18 - abstract class
abstract class AbstractClass {
    abstract showName(): void
}

// const newObj = new AbstractClass() Não é possível criar uma instância de uma classe abstrata

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string){
        super()
        this.name = name
    }

    showName() {
        console.log(`O nome é: ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Josias")

newAbstractObject.showName()

// 19 - relações entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)