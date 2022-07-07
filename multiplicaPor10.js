const arrayNums = [1, 2, 3, 4]

// const array10Nums = arrayNums.map(num => num*10)
const array10Nums = arrayNums.map(multiplicaPor10)

function multiplicaPor10(num){
    return num*10
}

console.log(array10Nums)