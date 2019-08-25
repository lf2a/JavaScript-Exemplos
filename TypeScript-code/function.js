function rest(name) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(name + ' ' + names.join(' - '));
}
rest('luiz', 'filipy', 'araujo', 'almeida');
