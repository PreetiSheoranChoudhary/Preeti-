const fs = require('fs');

const str = "hello world";
fs.writeFile('./output/out.txt', str, fn);

function fn() {
    console.log('file wriiten successfully');
}