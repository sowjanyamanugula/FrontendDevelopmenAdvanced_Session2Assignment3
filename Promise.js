'use strict'

let mypromise1= new Promise((resolve,reject) =>{
    setTimeout(()=>{
             resolve("Started(Synch code started)");
    },1000);
});

let mypromise2= new Promise((resolve,reject) =>{
    setTimeout(()=>{
             resolve("Promise started(Asynch code started)");
    },1500);
});

let mypromise3= new Promise((resolve,reject) =>{
    setTimeout(()=>{
             resolve("Promise made(Synch code terminated)");
    },2000);
});

let mypromise4= new Promise((resolve,reject) =>{
    setTimeout(()=>{
             resolve("Promise fulfilled(ASynch code terminated)");
    },2500);
});

Promise.all([mypromise1,mypromise2,mypromise3,mypromise4])
     .then((data) =>{
          console.log(data);
          
     });
    