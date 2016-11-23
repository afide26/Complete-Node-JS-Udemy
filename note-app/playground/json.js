// var obj = {
//   name: 'Alan'
// };

// var strObj = JSON.stringify(obj);
// console.log(typeof strObj);
// console.log(strObj);


// var personString = '{"name": "Alan", "age": 44}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);

// Method to write the file
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

// convert the JSON from file to obj
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);