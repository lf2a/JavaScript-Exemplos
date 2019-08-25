function rest(name: string, ...names: string[]) {
  console.log(name + ' ' + names.join(' - '))
}
rest('luiz', 'filipy', 'araujo', 'almeida')