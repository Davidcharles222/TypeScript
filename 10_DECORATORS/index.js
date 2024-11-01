var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 1 - exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator!');
    return function (target, propertKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
var myClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _testing_decorators;
    return _a = /** @class */ (function () {
            function myClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            myClass.prototype.testing = function () {
                console.log('termainando execução do método');
            };
            return myClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [myDecorator()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: function (obj) { return "testing" in obj; }, get: function (obj) { return obj.testing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log('executou a.');
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log('executou b.');
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log('executou c.');
    };
}
var MultipleDecorators = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _testing_decorators;
    return _a = /** @class */ (function () {
            function MultipleDecorators() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            MultipleDecorators.prototype.testing = function () {
                console.log('Terminando exucução');
            };
            return MultipleDecorators;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [a(), b(), c()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: function (obj) { return "testing" in obj; }, get: function (obj) { return obj.testing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var multiple = new MultipleDecorators();
multiple.testing();
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor.name); // retorna nome da classe
    if (constructor.name === 'User') {
        console.log('Criando usuário!');
    }
}
var User = function () {
    var _classDecorators = [classDec];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1(name) {
            this.name = name;
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
var matheus = new User('Matheus');
console.log(matheus);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        // descriptor.enumerable = value
    };
}
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    // @enumerable(true)
    Machine.prototype.showName = function () {
        console.log(this);
        return "O nome da m\u00E1quinas \u00E9: ".concat(this.name);
    };
    return Machine;
}());
var trator = new Machine('Trator');
trator.showName();
// 5 - acessor decorator
var Monster = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_showName_decorators;
    var _get_showAge_decorators;
    return _a = /** @class */ (function () {
            function Monster(name, age) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
                this.age = age;
            }
            Object.defineProperty(Monster.prototype, "showName", {
                get: function () {
                    return "Nome do monstro: ".concat(this.name);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "showAge", {
                get: function () {
                    return "Idade do monstro: ".concat(this.age);
                },
                enumerable: false,
                configurable: true
            });
            return Monster;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_showName_decorators = [enumerable(true)];
            _get_showAge_decorators = [enumerable(false)];
            __esDecorate(_a, null, _get_showName_decorators, { kind: "getter", name: "showName", static: false, private: false, access: { has: function (obj) { return "showName" in obj; }, get: function (obj) { return obj.showName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_showAge_decorators, { kind: "getter", name: "showAge", static: false, private: false, access: { has: function (obj) { return "showAge" in obj; }, get: function (obj) { return obj.showAge; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var charmander = new Monster('Charmander', 10);
console.log(charmander);
// 6 - property decorator
// 1 - 00001
function formatNumber() {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newVal) {
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
var ID = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ID(id) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                __runInitializers(this, _id_extraInitializers);
                this.id = id;
            }
            return ID;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [formatNumber()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var newItem = new ID('1');
console.log(newItem);
