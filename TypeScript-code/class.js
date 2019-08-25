var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getP = function () {
        return this.name + ' ' + this.age;
    };
    return Person;
}());
var p = new Person('luiz', 19);
console.log(p);
console.log(p.getP());
var Per1 = /** @class */ (function () {
    function Per1(name) {
        this.name = name;
    }
    return Per1;
}());
var Per2 = /** @class */ (function (_super) {
    __extends(Per2, _super);
    function Per2(code, name) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Per2.prototype.display = function () {
        console.log(this.code + ' ' + this.name);
    };
    return Per2;
}(Per1));
var p2 = new Per2(123, 'luiz');
p2.display();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        console.log(this.name + ' ' + speed);
    };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(name) {
        return _super.call(this, name) || this;
    }
    Audi.prototype.run = function (speed) {
        console.log('audi');
        _super.prototype.run.call(this, speed);
    };
    return Audi;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(name) {
        return _super.call(this, name) || this;
    }
    Mercedes.prototype.run = function (speed) {
        console.log('mercedes');
        _super.prototype.run.call(this, speed);
    };
    return Mercedes;
}(Car));
var c1 = new Audi('r8');
c1.run(100);
var c2 = new Mercedes('gt');
c2.run(123);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.display = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, code) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.find = function (name) {
        return new Dog(name, 'ce4');
    };
    return Dog;
}(Animal));
var dog = new Dog('dogg', 'vur4');
dog.display();
var dog2 = dog.find('c');
console.log(dog2);
var Math_ = /** @class */ (function () {
    function Math_() {
    }
    Math_.getPI = function () {
        return 3.14;
    };
    Math_.pi = 3.14;
    return Math_;
}());
console.log(Math_.pi);
console.log(Math_.getPI());
