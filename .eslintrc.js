/*
 * @Autor: 李建鹏
 * @Date: 2022-04-18 18:17:22
 * @LastEditTime: 2022-04-18 18:17:22
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": [1, 4]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
