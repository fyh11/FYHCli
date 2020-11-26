/*
 * @Author: your name
 * @Date: 2020-10-21 16:47:40
 * @LastEditTime: 2020-11-26 09:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fyh-main/lib/core/help.js
 */
const program = require('commander');

const helpOptions = () => {
  program.option('-w --why', 'a fyh option');

  program.option('-s --src <src>', 'a source folder');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages');
  program.option('-f --framework <framework>', 'your framework name');

  program.on('--help', function() {
    console.log("");
    console.log("usage");
    console.log("   fyh -v");
    console.log("   fyh -version");
  })
}

module.exports = helpOptions;
