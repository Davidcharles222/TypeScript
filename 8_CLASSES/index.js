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
// 1 - campos em classe
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var david = new User();
console.log(david);
david.name = 'David';
// david.job = 'Programador' não pode criar variaveis que não tenha na classe
console.log(david);
// 2 - constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var joao = new NewUser('João', 22);
console.log(joao);
// const pedro = new NewUser(12)
// 3 - campo readonly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car('Fusca');
console.log(fusca);
fusca.name = 'Fusca turbo';
// fusca.wheels = 5
// 4 - herança e super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine('Trator');
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log('Hey Stranger!');
    };
    return Dwarf;
}());
var jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - this
var Truch = /** @class */ (function () {
    function Truch(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truch.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia."));
    };
    return Truch;
}());
var volvo = new Truch('Volvo', 400);
volvo.showDetails();
// 7 - getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + ' ' + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var matheusBattisti = new Person('David', 'Charles');
console.log(matheusBattisti.name);
console.log(matheusBattisti.fullName);
// 8 - setter
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillx", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log('x inserido com sucesso');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "filly", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log('y inserido com sucesso');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoord", {
        get: function () {
            return "x: ".concat(this.x, " e y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoord);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O t\u00EDtulo do post \u00E9: ".concat(this.title);
    };
    return blogPost;
}());
// 10 - overrride de métodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log('alguma coisa');
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log('testando outra coisa');
    };
    return Nova;
}(Base));
var myObject = new Nova();
myObject.someMethod();
// 11 - public
var C = /** @class */ (function () {
    function C() {
        this.x = 10; // formato padrão
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstace = new C();
console.log(cInstace.x);
var dInstance = new D();
console.log(dInstance.x);
// 12 - protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log('Este método é protegido');
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log('X: ' + this.x);
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = 'Private';
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log('Método privado');
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass { Não conseguimos acessar sub classes no private
//     myMethod() {
//         this.privateMetlhod
//     }
// }
// 14 - static members
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMehtod = function () {
        console.log('Este é um método estático');
    };
    StaticMembers.prop = 'Teste static';
    return StaticMembers;
}());
console.log(StaticMembers.prop); // sem o static ele não acessa o prop
StaticMembers.staticMehtod();
// 15 - generic class
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return "O first \u00E9: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
var secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - parameter properties
var parameterProperties = /** @class */ (function () {
    function parameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(parameterProperties.prototype, "showQty", {
        get: function () {
            return "Qtd total: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(parameterProperties.prototype, "showPrice", {
        get: function () {
            return "Qtd total: ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return parameterProperties;
}());
var newShirt = new parameterProperties('Camisa', 5, 12.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - myClass expressions
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass('Jones');
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
// const newObj = new AbstractClass() Não é possível criar uma instância de uma classe abstrata
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("O nome \u00E9: ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
var newAbstractObject = new AbstractExample("Josias");
newAbstractObject.showName();
// 19 - relações entre classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
console.log(doguinho);
