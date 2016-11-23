console.log("Starting app.js");

const fs    = require('fs');
const _     = require('lodash');

const notes = require('./notes.js');
console.log(process.argv)
var command = process.argv[2];
console.log('Command:',command.toUpperCase());

if(command.toLowerCase() === 'add'){
  console.log("Adding new note");
}else if(command.toLowerCase() ==='list'){
  console.log("Listing all notes");
}else if(command.toLowerCase() ==="read"){
  console.log("Reading a note");
}else if(command.toLowerCase() ==="remove"){
  console.log("Removing a note");
}else{
  console.log("Command not recognised");
}