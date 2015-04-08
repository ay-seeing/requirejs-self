({
  appDir: './',
  // 脚本的根路径
  // 相对于程序的根路径
  baseUrl: 'asset',
  // 打包输出的路径
  // 所有在程序根目录下的文件都将会被复制到该目录下
  // 相对于程序的根路径
  dir: 'build',
  // 模块(modules)的相对路径
  paths: {
    "app": "js/app",
    "indexHtml": "template/index.html",
    "listHtml": "template/list.html"
  },
  // 需要打包合并的js模块，数组形式，可以有多个
  // name 以 baseUrl 为相对路径，无需写 .js 后缀
  // 比如 main 依赖 a 和 b ， a 又依赖 c ，则 {name: "main"} 会把 c.js a.js b.js main.js 合并成一个 main.js
  modules: [
    // {name: "../../p"},
    {name: '../main'}
    // 也可以强制建立依赖关系（即使main.js的代码里没有依赖d.js和e.js，在代码合并的时候将它们插入到 main.js 前面）
    /*{
      name: "../../main",
      include: ["../../d","../../e"]
    }*/
  ]//,
  // 通过正则以文件名排除文件 / 文件夹
  // 比如当前的正则表示排除 .svn 、.git　等这类隐藏的文件
  // fileExclusionRegExp: /^\./,
  // 自动优化应用程序下的css文件
  // 允许的值：
  // "none"不压缩仅合并； 
  // "standard"标准压缩，去换行、空格、注释
  // "standard.keepLines" 除标准压缩外，保留换行
  // "standard.keepComments"  除标准压缩外,保留注释
  // "standard.keepComments.keepLines"  除标准压缩外，保留换行和注释
  // optimizeCss: none,
  // 优化器（optimizer）将从输出目录中删除已合并的文件
  // removeCombined: false,
  // 为哪些没有使用 define() 声明依赖关系及设置模块值的模块，配置依赖关系与“浏览器全局”出口的脚本。
  /*shim: {
    'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore', 'jquery'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'foo': {
      deps: ['bar'],
      exports: 'Foo',
      init: function (bar) {
        //Using a function allows you to call noConflict for
        //libraries that support it, and do other cleanup.
        //However, plugins for those libraries may still want
        //a global. "this" for the function will be the global
        //object. The dependencies will be passed in as
        //function arguments. If this function returns a value,
        //then that value is used as the module export value
        //instead of the object found via the 'exports' string.
        //Note: jQuery registers as an AMD module via define(),
        //so this will not work for jQuery. See notes section
        //below for an approach for jQuery.
        return this.Foo.noConflict();
      }
    }
  },*/
  // 延迟（毫秒）
  // waitSeconds: 15
});



/*
requirejs中文：http://requirejs.cn/#modulenotes-urls   
RequireJS Optimizer 的使用和配置方法（二）     http://segmentfault.com/blog/f2e/1190000000395435

优化，压缩RequireJS Optimizer 给传统的前端项目打包      http://www.qingdou.me/3937.html



gulp中打包requirejs插件：
amd-optimize     https://www.npmjs.com/package/amd-optimize
gulp-r      https://www.npmjs.com/package/gulp-r
gulp-requirejs-optimize    https://www.npmjs.com/package/gulp-requirejs-optimize
。。。  




grunt-contrib-requirejs     https://www.npmjs.com/package/grunt-contrib-requirejs
*/

