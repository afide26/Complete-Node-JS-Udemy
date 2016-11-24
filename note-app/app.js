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
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("New note created");
    notes.logNote(note);
  }else{
    console.log(`The note ${argv.title} already exists`)
  }
}else if(command.toLowerCase()=== 'remove'){
  var noteRemoved= notes.removeNote(argv.title);
  var message = noteRemoved ? `Note ${argv.title} was removed` : `Note with the title ${argv.title} not found`;
  console.log(message);
}else if(command.toLowerCase()=== 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Note found");
    notes.logNote(note);
  }else{
    console.log(`Note with the title ${argv.title} not found`);
  }
}else if(command.toLowerCase()=== 'list'){
  notes.getAll();
}else{
  console.log("Command not recognised");
}