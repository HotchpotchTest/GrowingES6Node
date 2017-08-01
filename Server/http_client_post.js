/**
 * Created by dongfuqiang on 2017/8/1.
 */

const http = require('http');
let options = {
    host: '127.0.0.1',
    path: '/',
    port: '8081',
    method: 'POST'
};
function readJSONResponse (response) {
    let responseData = '';
    response.on('data', function(chunk){
       responseData += chunk;
    });
    response.on('end', function(){
       let dataObj = JSON.parse(responseData);
       console.log("Message: " + dataObj.message);
       console.log("Question: " + dataObj.question);
    });
}
let req = http.request(options, readJSONResponse);
req.write('{"name":"Bilbo", "occupation":"Burglar"}');
req.end();