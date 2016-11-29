var asyncAdd = (a,b)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

// A new instance of a Promise takes one parameter, a function

// var somePromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Hey. It worked really well!');
//     reject('Unable to fufill promise');
//   }, 2500);

// });

// // The then method has one parameter, a function

// somePromise.then((message)=>{
//   console.log('Success:', message);
// }, (errorMessage)=>{
//   console.log('Error: ', errorMessage);
// })

// This version has some quirks with error handling
// Printing undefined to the second promise call
// asyncAdd(11, '26').then((res)=>{
//   console.log('Results: ', res);
//   return asyncAdd(res, 45);
// }, (errorMessage)=>{
//   console.log(errorMessage);
// }).then(function(res){
//   console.log('Should be 82:', res);
// }, function(errorMessage){
//   console.log(errorMessage);
// });


asyncAdd(5,7).then((res)=>{
  console.log('Results: ', res);
  return asyncAdd(res, 33).then((res)=>{
    console.log('Should be 45 -', res);
  })
}).catch((errorMessage)=>{
  console.log(errorMessage);
});






