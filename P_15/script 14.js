"use strict";
// 1
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}
// 2
let num = 50;
do {
    console.log(num);
    num++;
}
while (num <= 55);
// 3
let num = 50;
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}