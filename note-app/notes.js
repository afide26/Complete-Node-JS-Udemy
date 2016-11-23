console.log("Starting notes.js");


var addNote = (title, body)=>{
  console.log('Adding note', title, body);
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