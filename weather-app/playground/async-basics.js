console.log('Starting app');

setTimeout(()=>{
  console.log("Activity inside setTimeout");
}, 2000);

setTimeout(()=>{
  console.log('setTimeout with 1 sec interval');
}, 1000)

console.log('Finishing app');