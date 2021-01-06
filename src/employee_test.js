const Employee = require('./employee');

const em = new Employee('A002', 'Hans', 35);

// 相當於呼叫 toString()
console.log('' + em);

console.log(em.toJSON());