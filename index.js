let x
let chance = 3
let count = 0

do {
    alert(`${chance - count}`)
    x = prompt('Password')
    if (x === '7777') {
        break;

    } 
    count++

} while (count !== 3)
