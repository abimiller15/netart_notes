let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000

if ( isNaN(amount) ){
    console.log(`you fucked up, you passed ${progress.argv[3]} instead of a number`)
} else if (action == 'give'){
    //amount = Number(amount)
    balance += (amount)
    console.log('gonna deposit some mon mon')
    console.log('you now have, '+balance+' dollars')
    //console.log(`you now have, ${balance} dollars`)
} else if (action == 'take') {
    balance -= (amount)
    console.log(`you've taken out ${amount}`)
    console.log('gonna take some mon mon')
} else {
    console.log('sorry, '+action+' is not a function')
    //    console.log( `sorry, ${action} is not a function`)
    console.log("why don't you try 'give' or 'take' ?")
}



// let x = 0
// x = x + 1 // aka x ++
// x += 5 //aka x = x + 5
// x -+ 3
// x *= 2
//console.log(x)
