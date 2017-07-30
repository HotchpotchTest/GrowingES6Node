var mymath = require('mymath.js');

exports.increment = function (val) {
  return mymath(val, 1);
}

// for (var prop in module.constructor) {
//   console.log(prop);
// }

// console.log(module.constructor);


process.nextTick(function(){
  console.log("nextTick1 延迟执行");
});
process.nextTick(function(){
  console.log("nextTick2 延迟执行");
});

setImmediate(function(){
  console.log("Immediate1 延迟执行");
  process.nextTick(function(){
    console.log("Immediate1 插入一个下次循环 延迟执行");
  });
});

setImmediate(function(){
  console.log("Immediate2 延迟执行");
});

setImmediate(function(){
  console.log("Immediate3 延迟执行");
});

setImmediate(function(){
  console.log("Immediate4 延迟执行");
});
console.log("正常试行");


















//
