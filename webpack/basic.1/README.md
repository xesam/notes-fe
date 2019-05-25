## npm 的传参问题
    
    {
      "scripts": {
        "webpack": "webpack"
      },
      "dependencies": {
        "webpack": "3.8.1"
      }
    }

向 npm 脚本传入参数，要使用--标明

npm run webpack 默认的 config 文件是 webpack.config.js，如果需要指定不同的 config 文件，直接用 webpack 命令的时候应该是

    webpack --config webpack.config.2.js
    
使用 npm 的时候就需要改成如下方式：

    npm run webpack -- --config webpack.config.2.js

