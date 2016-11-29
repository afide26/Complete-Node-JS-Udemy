// A new instance of a Promise takes one parameter, a function

var somePromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Hey. It worked really well!');
    reject('Unable to fufill promise');
  }, 2500);

});

// The then method has one parameter, a function

somePromise.then((message)=>{
  console.log('Success:', message);
}, (errorMessage)=>{
  console.log('Error: ', errorMessage);
})