interface item {
    name:string
    price:number
}
const book: item ={
    name: 'Imran Series' ,
     price: 200
}
const apple: item ={
    name: 'Mazher Kaleem M.A' ,
      price: 450
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`book name: ${apple.name},price: $${apple.price}`)