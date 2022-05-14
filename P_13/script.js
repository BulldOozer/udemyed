"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');

}
---------------------------------
const num = 50;
if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Many!');
} else {
    console.log('OK!');
}
-------------------------------------------
const num = 50;
(num === 50) ? console.log('Ok!') : console.log('Error!');
-------------------------------------------

const num = 51;
switch (num) {
   case 49:
       console.log('No!');
       break;
   case 100:
       console.log('No!');
       break;
   case 50:
       console.log('Yes!');
       break;
   default:
        console.log('No at this time!');
        break;
}