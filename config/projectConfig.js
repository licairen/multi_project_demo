/*
 * @Autor: 李建鹏
 * @Date: 2022-04-15 18:24:11
 * @LastEditTime: 2022-04-18 14:11:20
 * @Description: 项目配置
 */

const projectName = require("./project");
const config = {
  // $ 项目A
  projectA: {
    pages: {
      index: {
        entry: "src/projects/projectA/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: "projectA"
      },
    },
    devServer: {
      port: 7777, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
     }
  },
  // $ 项目B
  projectB: {
    pages: {
      index: {
        entry: "src/projects/projectB/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: "projectB"
      },
    },
    devServer: {
      port: 8888, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
     }
  },
  // $ 项目C
  projectC: {
    pages: {
      index: {
        entry: "src/projects/projectC/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: "projectC"
      },
    },
    devServer: {
      port: 9999, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: "0.0.0.0", // 指定使用一个 host，默认是 localhost
     }
  },
};

const configObj = config[projectName.name];

module.exports = configObj;
