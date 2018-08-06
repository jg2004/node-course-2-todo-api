const jwt = require('jsonwebtoken');
const token = jwt.sign('this is a message','123abc');

console.log(token);

console.log(jwt.verify(token,'123abc'))







// const crypto = require('crypto-js');
// const SHA256 = crypto.SHA256;

// const message = 'I am user number 25';
// const hash = SHA256(message);
// console.log('message: ', message)
// console.log('hash: ', hash.toString());
