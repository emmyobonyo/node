const os = require('os');
const user = os.userInfo()

console.log(user);
console.log(os.uptime());
console.log(os.type());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.release());