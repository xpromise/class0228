
var data = 'atguigu';

function doNothing() {
  console.log('doNothing() ' + data);
}

function doAnything() {
  console.log('doAnything() ' + data);
}

/*
  暴露模块中的内容：
    module.exports
    exports
 */
exports.doNothing = doNothing;
exports.doAnything = doAnything;