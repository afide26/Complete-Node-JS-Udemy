console.log("Starting notes.js");
const fs = require('fs');

// Add 2 new functions for reusability
var logNote = function(note){
  console.log("----------------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

var fetchNotes = ()=>{
  // Write a try catch to solve the problem if notes-data.json does not exist
  // Write code to ensure the notes-data.json will not be wiped out
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body)=>{
  var notes = fetchNotes();
  var note = {
              title:title,
              body: body
            };

 // Use ES6 style without brackets to return boolean
 // to return an array using filter
 var duplicateNotes = notes.filter((note)=> note.title === title);

 // Check if there are duplicate notes
 if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
 }
};

var getAll = ()=>{
  console.log("Getting all notes");
};

var getNote = (title) =>{
  var notes = fetchNotes();
  var filteredNotes= notes.filter((note)=> note.title === title);
  return filteredNotes[0]
};

var removeNote = (title) => {
  // fetchNotes
  var notes = fetchNotes();
  // filternotes, removing the one with argument
  var filteredNotes = notes.filter((note)=>{
    return note.title !== title;
  });
  console.log(filteredNotes);
  // saveNotes
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

// For multiple module exports
// If the attribute and the value are the same
// the object can only have one attribute name
// addNote: addNote() is the same with addNote
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};