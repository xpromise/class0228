import {add} from './js/test1';
import {mul} from './js/test2';
import data from './json/data';  //会将json字符串转化为js对象
import './less/test1.less';
import './less/test2.less';

console.log(add(3, 3));
console.log(mul(3, 3));
console.log(mul(4, 4));
console.log(data.name, data.age);