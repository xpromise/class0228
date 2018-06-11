(function () {
  function add(x, y) {
    return x + y;
  }
  console.log(add(10, 20));
  console.log(add(20, 20));
  console.log(add(30, 20));
})();;(function () {
  var result = [1, 9, 8, 3, 6, 8].filter(function (item) {
    return item > 5;
  });
  console.log(result);
})();