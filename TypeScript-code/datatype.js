// number
var num = 2019;
var oct = 298;
var hex = 0x2AD4;
var bin = 87;
console.log(num);
console.log(oct);
console.log(hex);
console.log(bin);
var oneToNine = 123456789;
console.log(oneToNine.toExponential(1));
console.log(oneToNine.toExponential(2));
console.log(oneToNine.toExponential(3));
var pi = 3.1415;
console.log(pi.toFixed());
console.log(pi.toFixed(1));
console.log(pi.toFixed(2));
var x = 23.567856;
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));
var xy = new Number(12);
console.log(xy);
console.log(xy.valueOf());
// Array
var ages;
ages = [18, 34, 64];
console.log(ages);
console.log(ages[0]);
var names;
names = ['luiz', 'filipy', 'araujo'];
console.log(names);
console.log(names[0]);
var ageName = ['luiz', 4, 'filipy', 6];
console.log(ageName);
var fruits = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits);
console.log(fruits.pop());
fruits.push('Papaya');
console.log(fruits);
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits);
console.log(fruits.indexOf('Papaya'));
// Tuple
var person = ['luiz', 19, true];
console.log(person);
console.log(person[1]);
person.push(23, 'filipy', false);
console.log(person);
var persons = [['luiz'], ['filipy']];
console.log(persons[0][0]);
var e1;
(function (e1) {
    e1[e1["a"] = 0] = "a";
    e1[e1["b"] = 1] = "b";
    e1[e1["c"] = 2] = "c";
})(e1 || (e1 = {}));
console.log(e1);
var e2;
(function (e2) {
    e2[e2["a"] = 2] = "a";
    e2[e2["b"] = 7] = "b";
    e2[e2["c"] = 10] = "c";
})(e2 || (e2 = {}));
console.log(e2);
var _type;
(function (_type) {
    _type[_type["int"] = 12] = "int";
    _type["str"] = "ok";
    _type["boo"] = "false"; // not allowed boolean values
})(_type || (_type = {}));
function getType(a) {
    if (a === '1') {
        return _type.int;
    }
    else if (a === 'luiz') {
        return _type.str;
    }
    else {
        return _type.boo;
    }
}
var typeCode = getType('luiz');
console.log(typeCode);
// union
var _status;
_status = 200;
_status = "OK";
console.log(_status);
function getTypeVar(_status) {
    if (typeof (_status) === "number") {
        console.log('number');
    }
    else if (typeof (_status) === "boolean") {
        console.log('boolean');
    }
}
getTypeVar(true);
getTypeVar(0);
// any
var lf = "abc";
lf = true;
lf = 123;
console.log(lf);
var arr1 = ["luiz", 123, true, { ok: 200 }];
console.log(arr1);
// void
function _void(name) {
    console.log(name);
}
_void('oi');
var undef = undefined;
// undef = 1 error
// never
// o type never não pode receber nenhum valor
function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Esse método não aceita esse tipo de type!");
}
function fail(message) { throw new Error(message); }
verificandoTipo("luiz");
verificandoTipo(123);
verificandoTipo(true);
