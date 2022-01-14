function getRandomBtwn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBtwn(10, 15))

let str = 122.24124;

console.log(parseInt(str.toFixed()));

console.log(Math.min(123, 13, 14, 5))
console.log(Math.max(13, 31, 141, 14))
console.log(Math.abs(-213.2))
console.log(Math.sqrt(99))
console.log(Math.pow(2, 53) - 1)
console.log(Math.floor(213.923))
console.log(Math.ceil(123.1231))
console.log(Math.round(3.49))
console.log(Math.round(4.51))
console.log(Math.trunc(122.124214))
console.log(Math.random())

const sumAll = (...all) => {
    let res = 0;
    for(let num of all) {
        res += num
    }
    return res
}

console.log(sumAll(33,33,33,2))

const text = 'Text is here'
const textReverse = text.split('').reverse()
console.log(typeof text, textReverse.join(''), typeof textReverse)

const commonMethods = () => {
    arrayMethods = [];
    stringMethods = [];
    arr = Array.prototype
    console.log(arr)
    for(let key in arr) {
        arrayMethods.push(arr[key])
    }
    console.log(arrayMethods)
    console.log(Object.keys(arr))

}

commonMethods()

setTimeout(() => console.log('Hi 1!'), 5000)
setTimeout(() => console.log('Hi 2!'), 5000)
setTimeout(() => console.log('Hi 3!'), 5000)
setTimeout(() => console.log('Hi 4!'), 5000)
