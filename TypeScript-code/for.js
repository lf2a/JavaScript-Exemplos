var arr = [19, 23, 'luiz', true, 'filipy', 2019, false];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var iterator = arr_1[_i];
    console.log(iterator);
}
for (var item in arr) {
    console.log(item);
    console.log(arr[item]);
}
