const accountId = 144553
let accountEmail = "Priyanshthapar777@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed to change

accountEmail = "hc@hc.come"
accountPassword = "123456"
accountCity = "Jaipur, Rajasthan"
let accountCountry;
console.log(accountId);

/*
prefer not to use var
because it is function scoped and can be redeclared and
 updated.
*/
console.table([accountEmail, accountPassword, accountCity, accountCountry]);
