## require.js使用教程
1. 下载require.js, 并引入
  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将require.js导入项目: js/libs/require.js 
2. 创建项目结构
  ```
  |-libs
    |-require.js
  |-modules
    |-alerter.js
    |-dataService.js
  |-main.js
  |-index.html
  ```
3. 定义require.js的模块代码
  * dataService.js
    ```
    define(function () {
      let msg = 'atguigu.com'
    
      function getMsg() {
        return msg.toUpperCase()
      }
    
      return {getMsg}
    })
    ```
  * alerter.js
    ```
    define(['dataService', 'jquery'], function (dataService, $) {
      let name = 'Tom2'
    
      function showMsg() {
        $('body').css('background', 'gray')
        alert(dataService.getMsg() + ', ' + name)
      }
    
      return {showMsg}
    })
    ```
4. 应用主(入口): main.js
  ```
  (function () {
    //配置
    requirejs.config({
      //基本路径
      baseUrl: "./",
      //模块标识名与模块路径映射
      paths: {
        "alerter": "modules/alerter",
        "dataService": "modules/dataService",
      }
    })
    
    //引入使用模块
    requirejs( ['alerter'], function(alerter) {
      alerter.showMsg()
    })
  })()
  ```
        
5. 页面使用模块:
  <script data-main="./main" src="./libs/require.js"></script>
    
------------------------------------------------------------------------

6. 使用第三方基于require.js的框架(jquery)
  * 将jquery的库文件导入到项目: 
    * ./libs/jquery-1.10.1.js
  * 在main.js中配置jquery路径
    ```
    paths: {
              'jquery': 'libs/jquery-1.10.1'
          }
    ```
  * 在alerter.js中使用jquery
    ```
    define(['dataService', 'jquery'], function (dataService, $) {
        var name = 'xfzhang'
        function showMsg() {
            $('body').css({background : 'red'})
            alert(name + ' '+dataService.getMsg())
        }
        return {showMsg}
    })
    ```