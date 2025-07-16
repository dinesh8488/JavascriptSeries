// const = when we declare the variable using const then we cannot change the data again once we defined.
const accountId = 123456
var accountName = "dinesh"
let accountCity = "Dehradun"

accountHolder = "Helios"
accountName = "Kumar"
accountCity = "Uttarakhand"

let accountState
console.log(accountCity)

console.table([accountName, accountHolder, accountCity, accountState])

/*
not to use var ,because of issue in block scope and functional scope
*/

