const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var capitalize = function(word){
  return word.slice(0,1).toUpperCase() + word.slice(1);
}
var titleOptions = {
  description:"Title of the note",
  demand: true,
  alias: 't'
};

var bodyOptions = {
  describe: 'The content of the note',
  demand: true,
  alias: 'b'
};

// Set a constant to store yargs library of the args the app ran with
const argv  = yargs
              .command('add', 'Add a new note',{title:titleOptions, body:bodyOptions})
              .command('read', 'Read a note',{title:titleOptions})
              .command('remove', 'Remove a note from the list',{title:titleOptions})
              .command('list', 'List all the notes')
              .help()
              .argv;
var command = argv._[0];
if(command){
console.log('Command:',command.toUpperCase());
}


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
  var message = noteRemoved ? `Note with the title ${capitalize(argv.title)} was removed` : `Note with the title ${argv.title} not found`;
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
  console.log("----------------");
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes`);
  allNotes.forEach((note)=> notes.logNote(note));
}else{
  console.log("Command not recognised");
}













