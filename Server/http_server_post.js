/**
 * Created by dongfuqiang on 2017/8/1.
 */
const http = require('http');
http.createServer(function (req, res) {
   let jsonData = "";
   req.on('data', function (chunk) {
      jsonData += chunk;
   });
   req.on('end', function () {
      let reqObj = JSON.parse(jsonData);
      let resObj = {
        message: "Hello " + reqObj.name,
        question: "Are you a good " + reqObj.occupation + "?"
      };
      res.writeHead(200);
      res.end(JSON.stringify(resObj));
   });
}).listen(8081);

