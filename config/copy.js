/*
 * @Autor: 李建鹏
 * @Date: 2022-04-15 18:24:11
 * @LastEditTime: 2022-04-17 17:36:54
 * @Description: 拷贝文件
 */

// $ 命令行交互 如果本地存在此项目 根据用户选择是否替换本项目或者删除本项目
// $ 添加了未包含在原生fs模块中的文件系统方法，并向fs方法添加了promise支持
const fse = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "请输入要生成的项目名称",
    },
  ])
  .then((answers) => {
    createProject(answers.projectName);
  });

// # 拷贝项目模板
const createProject = (projectName) => {
  const currentTemp = path.join(`./src/projects/${projectName}`);
  // $ 判断当前要拷贝的项目是否存在
  fse.pathExists(currentTemp, (err, exists) => {
    console.log(err, exists); // => null, false
    // $ 根据用户选择是否替换本项目或者删除本项目
    if (exists) {
      // $ 这里也可以覆盖原项目或者dong
      inquirer
        .prompt([
          {
            type: "input",
            name: "projectName",
            message: "项目已存在，请重新输入项目名称",
          },
        ])
        .then((answers) => {
          createProject(answers.projectName);
        });
      //   throw chalk`{red.bold.bgWhite >>> ${projectName} <<< 项目已经存在}`;
    } else {
      // $ 拷贝文件到指定目录
      fse.copy("./temp", path.join(`./src/projects/${projectName}`), (err) => {
        // if (err) return console.error(err)
        if (err)
          throw chalk`{red.bold.bgWhite ------${projectName}项目拷贝失败 ${err}------}`;
        console.log(chalk.red.bold(`--->>>${projectName}项目拷贝成功`));
      });
    }
  });
};
