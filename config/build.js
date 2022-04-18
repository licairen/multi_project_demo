/*
 * @Autor: 李建鹏
 * @Date: 2022-04-15 18:24:11
 * @LastEditTime: 2022-04-18 16:10:54
 * @Description: 打包文件
 */
const projectName = process.argv[2]
const fse = require("fs-extra");
fse.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)
let str = 'npm run build';
let exec = require('child_process').execSync;
exec(str, {stdio: 'inherit'});