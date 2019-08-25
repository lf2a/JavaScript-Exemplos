function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}

let myNumArr = getArray<number>([100, 200, 300])
let myStrArr = getArray<string>(["Hello", "World"])

myNumArr.push(400)
myStrArr.push("Hello TypeScript")



function displayType<T, U>(id: T, name: U): void {
  console.log(typeof (id) + ", " + typeof (name))
}

displayType<number, string>(1, "Steve")




class Person {
  firstName: string
  lastName: string

  constructor(fname: string, lname: string) {
    this.firstName = fname
    this.lastName = lname
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`)
}
var per = new Person("Bill", "Gates")
display(per)



interface KeyPair<T, U> {
  key: T
  value: U
}

let kv1: KeyPair<number, string> = { key: 1, value: "Steve" };




class KeyValuePair<T, U>{
  private key: T
  private val: U

  setKeyValue(key: T, val: U): void {
    this.key = key
    this.val = val
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`)
  }
}

let kvp1 = new KeyValuePair<number, string>()
kvp1.setKeyValue(1, "Steve")
kvp1.display()




interface IKeyValueProcessor<T, U> {
  process(key: T, val: U): void
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>{
  process(key: T, val: U): void {
    console.log(`Key = ${key}, val = ${val}`)
  }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor()
proc.process(1, 'Bill')