const bcryptjs = require('bcryptjs');

let hash = (bcryptjs.hashSync('hola123', 10));

console.log(hash);
console.log(bcryptjs.compareSync('hola123', hash));