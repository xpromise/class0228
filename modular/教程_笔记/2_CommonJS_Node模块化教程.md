## Node.js模块化教程
1. 下载安装node.js
2. 创建项目结构
  ```
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-index.js
  ```
3. 模块化编码
  * module1.js
    ```
    const newsUrl = 'http://localhost:3000/news';
    const commentsUrl = 'http://localhost:3000/comments';
    //暴露出去
    exports.newsUrl = newsUrl;
    exports.commentsUrl = commentsUrl;
    ```
  * module2.js
    ```
    //引入依赖
    const m1 = require('./module1');

    //定义发送请求的方法
    function getNews(url) {
      console.log('发送请求获取数据，请求地址为：' + url);
      return 'newsData';
    }
    function getComments(url) {
      console.log('发送请求获取数据，请求地址为：' + url);
      return 'commentsData';
    }

    const newsData = getNews(m1.newsUrl);
    const commentsData = getComments(m1.commentsUrl);

    //暴露模块
    module.exports = {
      newsData,
      commentsData
    }
    ```
  * module3.js
    ```
    //定义显示内容的方法
    function showData(data) {
      console.log('要显示的信息：' + data);
    }
    //暴露模块
    module.exports = showData;
    ```
  * index.js
    ```
    const m2 = require('./modules/module2');
    const showData = require('./modules/module3');

    showData(m2.newsData);
    showData(m2.commentsData);
    ```
5. 通过node运行index.js
  * 命令: node index.js
  * 工具: 右键-->运行