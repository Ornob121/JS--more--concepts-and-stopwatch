// const { reject } = require("async");

const getData = new Promise((resolve, reject) =>{
    
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        resolve (555554455)
    }
    else{      
        reject('No Data Found');
    }


})
getData.then(data => console.log(data))
.catch(err => console.log('ERR :', err))