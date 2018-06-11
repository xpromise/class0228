(function () {
  function add (x, y) {
    return x + y;
  }
  console.log(add(10, 20));
  console.log(add(30, 40));
})();;(function () {
  var result = [1, 2, 3, 4].map(function (item) {
    return item + 10;
  });
  console.log(result);
})();