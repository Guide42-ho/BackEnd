const express = require('express');
const app = express()
let fs = require('fs')

fs.writeFile('demofile1.txt', 'test content', 'utf8', (err) => {
if (err) console.log (err)
else console.log('write complete!!');
});

fs.readFile('demofile1.txt', 'utf8', (err, data) => {
if (data) console.log(data);
else console.log(err)
});
fs.writeFile('demofile2.txt', 'file2 content', 'utf8', function (err) {
console.log("write file success")
fs.readFile('demofile2.txt', 'utf8', function (err, data) {
if (!err) console.log("read file", data);
else console.log(err)
});
});

console.log("Hello Backend")
console.log("Hello Node.js")
