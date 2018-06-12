// import {add} from './js/test1';
// import './less/test1.less'


import('./js/test2').then(function (page) {  //代码拆分  延迟加载
  // 渲染页面
  console.log(page);
  console.log(page.result);
});

function test() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  })
}

test()
  .then(res => {
    import('./js/test1')
      .then(function (page) {  //代码拆分  延迟加载
      // 渲染页面
      console.log(page);
      console.log(page.add(20, 20));
    });
  })

  
// console.log(add(10, 20));
// console.log(add(20, 20));
