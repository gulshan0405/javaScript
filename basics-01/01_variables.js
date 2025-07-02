const accountID = 12;
let accountEmail = "golu@gmail.com";
var accountPassword = "12345";
accountCity = "baikunthpur";

// accountID=1; //not allowed

accountEmail = "abc2@gmail.com";
accountPassword = "2316+1";
accountCity = "ambikapur";
let accountState;


/*
prefer not to use the var 
because of issue in  block scope and functional scope
*/
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity,accountState]);
