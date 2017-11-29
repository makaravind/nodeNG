const express = require('express');
const app = express();

const server = app.listen(3000, listening);

function listening() {
    console.log("listening...");
    app.set("h", "b");
    // console.log(app.locals);
}

app.get('/', function (req, res) {
   res.status(200).write('ok');
});

// (function a() {
//     console.log("this shouhld be called from a promise");
//     b().then((a) => console.log("outside", a));
// })();
//
// function b() {
//     return new Promise( (resolve, reject) => {
//         console.log("insiede promise");
//         resolve("promise");
//     });
// }