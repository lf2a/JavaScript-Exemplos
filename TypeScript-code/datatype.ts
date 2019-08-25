// number
let num: number = 2019
let oct: number = 0o452
let hex: number = 0x2AD4
let bin: number = 0b1010111
console.log(num)
console.log(oct)
console.log(hex)
console.log(bin)


let oneToNine: number = 123456789
console.log(oneToNine.toExponential(1))
console.log(oneToNine.toExponential(2))
console.log(oneToNine.toExponential(3))


let pi: number = 3.1415
console.log(pi.toFixed())
console.log(pi.toFixed(1))
console.log(pi.toFixed(2))


let x: number = 23.567856
console.log(x.toPrecision(1))
console.log(x.toPrecision(2))
console.log(x.toPrecision(3))


let xy = new Number(12)
console.log(xy)
console.log(xy.valueOf())

// Array

let ages: Array<number>
ages = [18, 34, 64]
console.log(ages)
console.log(ages[0])


let names: Array<string>
names = ['luiz', 'filipy', 'araujo']
console.log(names)
console.log(names[0])


let ageName: Array<number | string> = ['luiz', 4, 'filipy', 6]
console.log(ageName)


var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits)

console.log(fruits.pop())

fruits.push('Papaya');
console.log(fruits)

fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits)

console.log(fruits.indexOf('Papaya'))


// Tuple


var person: [string, number, boolean] = ['luiz', 19, true]
console.log(person)
console.log(person[1])
person.push(23, 'filipy', false)
console.log(person)


var persons: [string][] = [['luiz'], ['filipy']]
console.log(persons[0][0])

enum e1 {
  a,
  b,
  c
}
console.log(e1)

enum e2 {
  a = 2,
  b = 7,
  c = 10
}
console.log(e2)


enum _type {
  int = 12,
  str = 'ok',
  boo = 'false' // not allowed boolean values
}
function getType(a: string): _type {
  if (a === '1') {
    return _type.int
  } else if (a === 'luiz') {
    return _type.str
  } else {
    return _type.boo
  }
}
let typeCode: _type = getType('luiz')
console.log(typeCode)


// union


let _status: (string | number)
_status = 200
_status = "OK"
console.log(_status)

function getTypeVar(_status: (number | boolean)) {
  if (typeof (_status) === "number") {
    console.log('number')
  } else if (typeof (_status) === "boolean") {
    console.log('boolean')
  }
}
getTypeVar(true)
getTypeVar(0)


// any


let lf: any = "abc"
lf = true
lf = 123
console.log(lf)

let arr1: any[] = ["luiz", 123, true, { ok: 200 }]
console.log(arr1);


// void


function _void(name: string): void {
  console.log(name)
}
_void('oi')
let undef: void = undefined
// undef = 1 error


// never
// o type never não pode receber nenhum valor


function verificandoTipo(x: string | number): boolean {
  if (typeof x === "string") {
    return true
  } else if (typeof x === "number") {
    return false
  }

  return fail("Esse método não aceita esse tipo de type!")
}

function fail(message: string): never { throw new Error(message) }

verificandoTipo("luiz")
verificandoTipo(123)