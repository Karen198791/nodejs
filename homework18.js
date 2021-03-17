
// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։random(0-10*11)

let promise = new Promise((resolve, reject) => {
    resolve(a = Math.floor(Math.random() * 10) + 1);
  }).then(result => { if(a<5){
      console.log(a);
    }else{
        reject();
    }
    });

// 2․ ՈՒնենք config.json ֆայլ , 
// {
//     "host" : "localhost",
//     "port" : 3000
// }
//  պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։

const http = require("http");
const config = require("./config.json");

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(config.port, config.host, () => {
    console.log(` http://${config.host}:${config.port}`);
});
