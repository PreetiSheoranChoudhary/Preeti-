const regex = /[0-9]+%/g;
const str = `hi name = vinay, your admission number is 243% and your marks are 90%`;
let m;

while ((m = regex.exec(str)) !== null) {
    console.log('num: ', m);
}


let name = 'vinay';
console.log(`${name} your age is 25`);