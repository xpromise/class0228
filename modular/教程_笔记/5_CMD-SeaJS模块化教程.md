## sea.js简单使用教程
1. 下载sea.js, 并引入
  * 官网: http://seajs.org/
  * github : https://github.com/seajs/seajs
  * 将sea.js导入项目: libs/sea.js
2. 创建项目结构
  ```
  |-libs
    |-sea.js
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
    |-module4.js
    |-main.js
  |-index.html
  ```
3. 定义sea.js的模块代码
  * module1.js
    ```
    define(function (require, exports, module) {
      /*
        require: 引入依赖模块
        exports: 暴露模块
        module: 暴露模块
       */
      const msg = 'atguigu';
      function getMsg() {
        console.log('module1 getMsg() ' + msg);
        return msg;
      }
      //暴露模块
      module.exports = getMsg;
    })
    ```
  * module2.js
    ```
    define(function (require, exports, module) {
      exports.msg1 = 'atguigu';
      exports.msg2 = 'hello';
    })
    ```
  * module3.js
    ```
    define(function (require, exports, module) {
      //同步引入模块
      const getMsg = require('./module1');

      let msg = getMsg();

      msg = msg.toUpperCase();

      module.exports = {
        msg
      }

    })
    ```
  * module4.js
    ```
    define(function (require, exports, module) {
      //异步引入模块
      require.async('./module2', function (m2) {
        console.log(m2.msg1, m2.msg2);
      })
      console.log('module4执行了~~~');
    })
    ```
  * main.js : 主(入口)模块
    ```
    define(function (require) {
      const m3 = require('./module3');
      require('./module4');

      console.log(m3.msg);
    })
    ```
4. index.html:
  ```
  <!--
  使用seajs:
    1. 引入sea.js库
    2. 如何定义导出模块 :
      define()
      exports
      module.exports
    3. 如何依赖模块:
      require()
    4. 如何使用模块:
      seajs.use()
  -->
  <script type="text/javascript" src="libs/sea.js"></script>
  <script type="text/javascript">
    seajs.use('./modules/main')
  </script>
  ```
        
    
       