console.log("Starting App");
// Notes
// 1.0 Require fs module to use it and store in const fs
// 1.1 Read more here - https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
// 2.0 Read more os.userInfo([options]) - https://nodejs.org/api/os.html#os_os_userinfo_options
const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}.`);

