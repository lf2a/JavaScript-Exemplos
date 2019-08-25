class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getP(): string {
    return this.name + ' ' + this.age
  }
}

const p = new Person('luiz', 19)
console.log(p)
console.log(p.getP())




class Per1 {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Per2 extends Per1 {
  code: number

  constructor(code: number, name: string) {
    super(name)
    this.code = code
  }

  display() {
    console.log(this.code + ' ' + this.name)
  }
}
let p2 = new Per2(123, 'luiz')
p2.display()



class Car {
  name: string

  constructor(name: string) {
    this.name = name
  }

  run(speed: number) {
    console.log(this.name + ' ' + speed)
  }
}

class Audi extends Car {
  constructor(name: string) {
    super(name)
  }

  run(speed: number) {
    console.log('audi')
    super.run(speed)
  }
}

class Mercedes extends Car {
  constructor(name: string) {
    super(name)
  }

  run(speed: number) {
    console.log('mercedes')
    super.run(speed)
  }
}

let c1 = new Audi('r8')
c1.run(100)

let c2 = new Mercedes('gt')
c2.run(123)




abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  display(): void {
    console.log(this.name)
  }

  abstract find(string): Animal
}

class Dog extends Animal {
  private code: string

  constructor(name: string, code: string) {
    super(name)
  }

  find(name: string): Animal {
    return new Dog(name, 'ce4')
  }
}

let dog: Animal = new Dog('dogg', 'vur4')
dog.display()

let dog2: Animal = dog.find('c')
console.log(dog2)



class Math_ {
  static pi: number = 3.14

  static getPI(): number {
    return 3.14
  }
}

console.log(Math_.pi)
console.log(Math_.getPI());
