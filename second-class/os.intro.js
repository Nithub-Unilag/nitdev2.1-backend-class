// Working with Operating System.


const os = require('os');

// getting the hostname
const host = os.hostname()
console.log('Hostname')
console.log(host);

console.log();

// check the free memory on the computer
const freeMemory = os.freemem()
console.log(`I have ${freeMemory} free memory in my computer`);

console.log();

// print out the home directory
const homeDirectory = os.homedir()
console.log(`My home directory is ${homeDirectory}`)

console.log();

const computerCpus = os.cpus();
console.log(computerCpus);

console.log()

const computerArchi = os.arch();
console.log(`My computer architcture is a ${computerArchi} system`);