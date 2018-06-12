(function () {
	function add(num1, num2) {
		var num3 = 0;
		num1 = num1 + num3;
		return num1 + num2;
	}
	console.log(add(23, 56));
})();;(function () {
	var arr = [1,2,3,4,5].map(function (item, index) {
		return item + 10;
	});
	console.log(arr);
})();