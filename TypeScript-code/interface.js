var p = { first_name: 'luiz', last_name: 'almeida' };
console.log(p);
function p1(fname, lname) {
    console.log(fname + lname);
}
var _p1 = p1;
_p1('luiz', 'filipy');
var p3 = { id: '32fi43nf3', name: 'luiz filipy' };
console.log(p3.id);
var perobj = {
    empcode: 'uivrev3',
    name: 'luiz filipy',
    age: 19
};
console.log(perobj);
var _Person = /** @class */ (function () {
    function _Person(code, name) {
        this.code = code;
        this.name = name;
    }
    return _Person;
}());
var prs = new _Person('efij23i', 'luiz filipy');
console.log(prs);
