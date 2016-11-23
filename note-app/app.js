console.log("Starting app.js");
// Notes
// 1.0 Require fs module to use it and store in const fs
// 1.1 Read more here - https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
// 2.0 Read more os.userInfo([options]) - https://nodejs.org/api/os.html#os_os_userinfo_options
const fs    = require('fs');
const os    = require('os');
const notes = require('./notes.js')
const _     = require('lodash');

// Exercise 1 for 3rd Party modules - _.isString()
// console.log(_.isString(false));
// console.log(_.isString('Alan'));

// Exercise 2 for 3rd Party modules - _.uniq()
var filteredArray = _.uniq(["Alan", "Alan", 26, 11,11, 44,45,75]);

// The function will return a new array without the duplicates
console.log(filteredArray, 'New array length:', filteredArray.length);
// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}. You are now ${notes.age} soon to be ${notes.age + 1}.`);

