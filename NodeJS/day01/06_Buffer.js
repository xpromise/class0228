/*
  创建Buffer一共有三种方式：
    Buffer.allocUnsafe(number) 创建一个指定长度的buffer，并且里面可能包含敏感数据
      - 不安全的，但是性能好
    Buffer.alloc(number) 创建一个指定长度的buffer，并且里面全是00
      - 安全的，但是性能较差
    Buffer.from(string) 通过字符串创建指定的buffer
    
      返回数据是以16进制表示的2进制数据
      16 进制     00 - ff
      10 进制     0 - 255
      2 进制    00000000 - 11111111

     计算机内存最小存储单元bit(位)
     1 byte(字节) = 8 bit
     1 kb = 1024 byte      2^10 = 1024
     1 mb = 1024 kb
     1 gb = 1024 mb
 */

var buf1 = Buffer.allocUnsafe(10);  // 00 00 00 00 08 00 00 00 07 00
// console.log(buf1);
// buf1.fill(0);
// buf1.forEach(function (value, index, item) {
//   console.log(value, index, item);
// })
var buf2 = Buffer.alloc(10); // 00 00 00 00 00 00 00 00 00 00
var buf3 = Buffer.from('hello atguigu');
console.log(buf3);

// console.log(buf1);
// console.log(buf2);

