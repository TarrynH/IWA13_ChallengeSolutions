let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


// moved equals sign to in front of brackets
const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string' // changed = to ===
    const calculatedAsNumber = isString ? calculated : parseInt(calculated) // changed parseNumber to parseInt
    calculated = calculatedAsNumber + 1 // changed === to =
}

// moved equals sign to in front of brackets
const calcUser = () => {
  logCalc()  // added brackets to call function
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

// moved equals sign to in front of brackets
const checkUser = () => {
	if (user && state === 'requesting') {  // can also have user === 'John' but not necessary
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()