// const app = require("./app");
// const fs = require("fs");
// var x = 10;

// var y = 20;
// var sum = x + y;
// console.log(sum, "sum");
// if (x > y) {
// } else {
// }
// console.log(app);
// console.log(app.z());
// fs.writeFileSync("hello.txt", "sajdj sahdas ");

// server
const http = require("http");
const colors = require("colors");

console.log("hello".red);
const dataControl = (req, resp) => {
  resp.write("<h1>this is Gaurav  js sing run <h1/");
  resp.end();
};

http.createServer(dataControl).listen(4500);
// http
//   .createServer((req, resp) => {
//     // resp.write("<h1>this is Gaurav sing<h1/");
//     // resp.end();
//   })
//   .listen(4500);
