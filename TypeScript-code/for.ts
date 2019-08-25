let arr = [19, 23, 'luiz', true, 'filipy', 2019, false]

for (const iterator of arr) {
  console.log(iterator)
}

for (const item in arr) {
  console.log(item)
  console.log(arr[item])
}