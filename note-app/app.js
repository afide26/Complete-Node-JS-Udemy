console.log("Starting app.js");
// Notes
// 1.0 Require fs module to use it and store in const fs
// 1.1 Read more here - https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
// 2.0 Read more os.userInfo([options]) - https://nodejs.org/api/os.html#os_os_userinfo_options
const fs    = require('fs');
const os    = require('os');
const notes = require('./notes.js')

// Exercise 1 for files branch
// var result  = notes.addNote();
// console.log(result);

var sum = notes.add(5,9);
console.log('Result:',sum);
// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}. You are now ${notes.age} soon to be ${notes.age + 1}.`);

