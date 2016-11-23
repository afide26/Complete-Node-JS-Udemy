console.log("Starting notes.js");
const fs = require('fs');

var addNote = (title, body)=>{
  var notes = [];
  var note = {
              title:title,
              body: body
            };

  // Write a try catch to solve the problem if notes-data.json does not exist
  // Write code to ensure the notes-data.json will not be wiped out
  try{
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  }catch(e){

  }

 // Use ES6 style without brackets to return boolean
 // to return an array using filter
 var duplicateNotes = notes.filter((note)=> note.title === title);


 // Check if there are duplicate notes
 if(duplicateNotes.length === 0){
  notes.push(note);

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
 }else{
  console.log("The title already exists");
 }

};

var getAll = ()=>{
  console.log("Getting all notes");
};

var getNote = (title) =>{
  console.log("Getting note", title);
};

var removeNote = (title) => {
  console.log("Removing note",title);
};

// For multiple module exports
// If the attribute and the value are the same
// the object can only have one attribute name
// addNote: addNote() is the same with addNote
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};