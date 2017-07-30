// var net = require('net');
// var chatServer = net.createServer();
// var clientList = [];
// chatServer.on('connection',function(client){
// 	client.write('Hi!\n');
// 	clientList.push(client);
// 	client.on('data',function(data){
// 		console.log(data);
// 		for (var i = 0; i < clientList.length;i+=1) {
// 			//把数据发送给所有客户端
// 			clientList[i].write(data);
// 		};
// 	});
// });
// chatServer.listen(9000);





// while (s.__proto__) {
//
// 	console.log(s.__proto__);
// 	s = s.__proto__;
// }


// const http = require('http');
// const hostname = 'localhost'
// const port = 3000;
//
// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hi! ldaqiangl!');
// });
//
// server.listen(port, hostname, () => {
// 	console.log("服务器 启动成功");
// });
