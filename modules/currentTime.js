// 3. Modules պապակայում ստեղծել currentTime մոդուլ currentTime ֆունկցիայով որը արտածում է  կանչելու պահին ժամը, րոպեն ,վարկյանը և միլիվայրկյանը :
// Մոդուլը ներմուծել homework3.js ֆայլում և կանչել currentTime ֆունկցիավ  ու արդյունքը արտածել console-ում:

function currentTime(){
    var data = new Date();
    console.log(data.getHours());
    console.log(data.getMinutes());
    console.log(data.getMilliseconds());
    console.log(data.getYear());
}

module.exportes = currentTime;