// 1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):
const os = require('os');
const fs = require('fs');
const { getHashes } = require('crypto');

// console.log(os.totalmem());

// 2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):

// console.log(os.networkInterfaces());

// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
let mat = Math.floor(Math.random()*100000000)+1;
let st = mat + "txt";
fs.writeFileSync(`${st}`,"");
os.cpus();



// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:

// let radMe = fs.readFileSync('input.txt', 'utf-8');
// let red = radMe.split(' ');
// const str = red.join('-');
// fs.writeFileSync("write.txt", str);

// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js): 
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)   
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:
// let homework1 = fs.readFileSync('homework1.js', 'utf-8');
// let homework2 = fs.readFileSync('homework2.js', 'utf-8');
// let homework3 = fs.readFileSync('homework3.js', 'utf-8');
// let homework = homework1 + homework2 + homework3;
// let path = os.platform;
// let data = new Date();
// let data1 = data.getHours();
// let data2 = data.getMinutes();
// let data3 = data.getSeconds();
// let str2 = path + "_" + data1 + "_" + data2 + "_" +data3+ "." + "txt";
// fs.writeFileSync(`${str2}`, homework);