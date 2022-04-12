
const add = require('./calc/add.js')
const sub = require('./calc/sub.js')
const mul = require('./calc/mul.js')
const div = require('./calc/div.js')

const a = parseInt(process.argv[2]);
const choice = process.argv[3];
const b = parseInt(process.argv[4]);

if (choice === "add"){
    console.log(add(a,b));
}else if (choice === "sub"){
    console.log(sub(a,b));
}else if (choice === "mul"){
    console.log(mul(a,b));
}else if (choice === "div"){
    console.log(div(a,b));
}else {
    console.log('invalid choice. try again');
}