console.log("Starting app.js");

const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// Set a constant to store yargs library of the args the app ran with
const argv  = yargs.argv;
var command = argv._[0];
if(command){
console.log('Command:',command.toUpperCase());
}

// Check the difference between argv and yargs.arv, message);


console.log('Yargs:', argv);

if(command ===undefined){
   console.log("Command is undefined");
}else if(command.toLowerCase()=== 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command.toLowerCase()=== 'remove'){
  notes.removeNote(argv.title);
}else if(command.toLowerCase()=== 'read'){
  notes.getNote(argv.title);
}else if(command.toLowerCase()=== 'list'){
  notes.getAll();
}else{
  console.log("Command not recognised");
}