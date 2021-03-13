// 2. Ստեղծել package.json  ֆայլ որը կունենա  home2.jpg տեսքը, որտեղ author դիմաց կլինի Ձեր անուն ազգանունը:
// homework2.js ֆայլի միջոցով օգտագործելով random փաթեթը  console-ում արտածել 5 պատհական int արժեքներ 0 - 100 միջակայքում:
const Random = require("random");
for(let i = 0; i < 5; i++){
    const ron = Random.int(0, 100);
    console.log(ron);
}