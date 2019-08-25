let a: any = 123
let b = <number>a
console.log(typeof b)

interface person {
  name: string
  age: number
}

let p = <person>{}
p.name = 'luiz'
p.age = 19
console.log(p)