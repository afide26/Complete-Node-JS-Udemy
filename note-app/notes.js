console.log("Starting notes.js");

// Exercise to use module.exports exports is an object
// module.exports.addNote = () =>{
//   console.log('addNote');
//   return 'New note';
// };

module.exports.add = (a,b) => {
  return a + b;
}