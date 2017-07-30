var stream = require('stream');
var util = require('util');

util.inherits(Writer, stream.Writable);

var buf = Buffer.from("我的",'utf8');
buf[0] = "她";

console.log(buf.toString('utf8'));
// console.log((new stream()).__proto__.__proto__);

function Writer (opt) {
    stream.call(this, opt);
    this.data = new Array();
}
// Writer.prototype._write = function(data, encoding, callBack) {
//     this.data.push(data.toString('utf8'));
//     console.log("Adding: " + data);
//     callBack();
// };
// var w = new Writer();
//
// for (var i = 1; i < 5; i++) {
//     w.write("Item " + i , 'utf8');
// }
//
// w.on('end', function(){
// 	console.log("write is ended!");
// });
// w.end("ItemLast");
// console.log(w.data);
