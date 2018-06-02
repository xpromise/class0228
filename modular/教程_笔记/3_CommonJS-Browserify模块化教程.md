## Browserify模块化使用教程
1. 创建项目结构
  ```
  |-dist //打包生成文件的目录
  |-src //源码所在的目录
    |-module1.js
    |-module2.js
    |-module3.js
    |-index.js //应用主源文件
  |-index.html

  ```
2. 下载browserify
  * 全局: npm install browserify -g

3. 定义模块代码
  * module1.js
    ```
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```
  * module2.js
    ```
    module.exports = function () {
      console.log('module2()')
    }
    ```
  * module3.js
    ```
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```
  * app.js (应用的主js)
    ```
    //引用模块
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    ```
* 打包处理js:
  * browserify src/index.js -o dist/bundle.js
* 页面使用引入:
  ```
  <script type="text/javascript" src="dist/bundle.js"></script>
  ```