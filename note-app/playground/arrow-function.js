var square = (x)=> {
  return x * x;
};

console.log(square(59));


var user ={
  name:"Alan",
  sayHi: ()=>{
    console.log(`Hi ${this.name}`);
  },

  // Consider this ES6 way of adding methods to objects, notice the missing semi-colon
  sayHiAlt (){
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHiAlt(1,"Alan", "Fidelino");
