/*
 * @Autor: 李建鹏
 * @Date: 2022-04-15 18:24:11
 * @LastEditTime: 2022-04-18 14:11:56
 * @Description: 运行文件
 */
const fse = require("fs-extra");
const chalk = require("chalk");
const projectName = process.argv[2];
console.log(
  chalk`{rgb(255,0,0).bold.bgRgb(255,255,255) process.argv --->>>}`,
  process.argv
);

if (!projectName) throw chalk`{red.bold.bgWhite ------项目不存在,请检查配置------}`;
// console.log(process.argv)
console.log(`正在运行---${projectName}项目`, `${process.env.NODE_ENV} 环境`);
// console.log(chalk.red.bold(`正在运行---${projectName}项目`), `${process.env.NODE_ENV} 环境`, )
// if(!conf || !conf.pages) throw(chalk.red('------项目不存在,请检查配置------'));

fse.writeFileSync("./config/project.js", `exports.name = '${projectName}'`);

let exec = require("child_process").execSync;
exec("npm run serve", { stdio: "inherit" });
