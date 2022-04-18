const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const conf = require('./config/projectConfig')
let PROJECTNAME = require('./config/project.js').name
console.log('----',PROJECTNAME,  'NODE_ENV---' + process.env.NODE_ENV)

if(!conf) throw(chalk`{black.bold.bgWhite ------ 项目不存在,请检查配置 ------}`);
console.log(conf.devServer)


const assetsDir = ''
const path = require('path')
function getAssetPath (assetsDir, filePath) {
  return assetsDir
    ? path.posix.join(assetsDir, filePath)
    : filePath
}

module.exports = {
  pages: conf.pages,
  outputDir: `dist/${PROJECTNAME}`,
  assetsDir: "static", // 增加static文件夹
  lintOnSave: false,
  // productionSourceMap: false,
  devServer: conf.devServer, // $ 看项目需求 可配可不配
  configureWebpack: {
    plugins: [
      new ProgressBarPlugin({
        // format: 'build [:bar] :percent (:elapsed seconds)',
        // clear: false, 
        // width: 60
        width: 50,                     // 默认20，进度格子数量即每个代表进度数，如果是20，那么一格就是5。
        format: chalk.blue.bold("build") + chalk.yellow('[:bar] ') + chalk.green.bold(':percent') + ' (:elapsed秒)',
        // stream: process.stderr,        // 默认stderr，输出流
        // complete: "~",                 // 默认“=”，完成字符
        clear: false,                  // 默认true，完成时清除栏的选项
        // renderThrottle: "",            // 默认16，更新之间的最短时间（以毫秒为单位）
        callback() {                   // 进度条完成时调用的可选函数
          console.log(chalk.red.bold("---->>>>编译完成<<<<----"))
        }
    }),
    ]
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    const filename = getAssetPath(
      assetsDir,
      `static/js/[name].js`
    )
    config.mode('production').devtool(false).output.filename(filename).chunkFilename(filename)
    // !开启js、css压缩
    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('compressionPlugin')
    //   .use(new CompressionPlugin({
    //     test:/\.js$|\.html$|.\css/, // 匹配文件名
    //     threshold: 10240, // 对超过10k的数据压缩
    //     deleteOriginalAssets: false // 不删除源文件
    //   }))
    // }
    config.performance
      .set('hints', false)
    	// 将版本号写入环境变量
    	config
    	  .plugin('define')
    	  .tap(args => {
    	    args[0]['app_build_version'] = new Date().getTime();
    	    return args
        })

  },
  // css: {
  //   extract: false
  // }
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        fiber: require('fibers')
      }
    }
  }
}


