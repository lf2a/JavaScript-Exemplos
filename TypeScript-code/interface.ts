interface person {
  first_name: string
  last_name: string
}

let p: person = { first_name: 'luiz', last_name: 'almeida' }
console.log(p)

interface person2 {
  (fname: string, lname: string): void
}

function p1(fname: string, lname: string) {
  console.log(fname + lname)
}

let _p1: person2 = p1
_p1('luiz', 'filipy')


interface person3 {
  name: string
  readonly id: string
}
let p3: person3 = { id: '32fi43nf3', name: 'luiz filipy' }
console.log(p3.id)


interface IPer {
  name: string,
  age: number
}

interface IEmp extends IPer {
  empcode: string
}

const perobj: IEmp = {
  empcode: 'uivrev3',
  name: 'luiz filipy',
  age: 19
}
console.log(perobj)



interface IPrs {
  code: string
  name: string
}

class _Person implements IPrs {
  code: string
  name: string

  constructor(code: string, name: string) {
    this.code = code
    this.name = name
  }
}

let prs = new _Person('efij23i', 'luiz filipy')
console.log(prs)