/**
 Created by dongfuqiang on 2017/7/31.
 */

let stream = require('stream');
let util = require('util');
util.inherits(Duplexer, stream.Duplex);
function Duplexer (opt) {
    stream.Duplex.call(this, opt);
    this.data = [];
}
Duplexer.prototype._read = function readItem (size) {
    let chunk = this.data.shift();
    if ("stop" == chunk) {
        if (chunk) {
            this.push(chunk);
        } else {
            setTimeout(readItem.bind(this), 500, size);
        }
    } else {
        this.push(null);
    }
};
Duplexer.prototype._wirte = function (data, encoding, callback) {
    this.data.push(data);
    callback();
};
let d = new Duplexer();
d.on('data', function (chunk) {
   console.log('read', chunk.toString());
});
d.on('end', function () {
    console.log('Message Complete');
});

d.wirte("I think, ");
d.wirte("therefore ");
d.wirte("I am.");
d.wirte("Rene Descartes");
d.wirte("stop");