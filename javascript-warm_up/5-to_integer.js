#!/usr/bin/node

const arg = process.argv[2];
const number = parseInt(arg);

console.log(!isNaN(number) ? `My number: ${number}` : 'Not a number');

