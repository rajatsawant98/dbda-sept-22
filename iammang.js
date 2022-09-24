const fs=require('fs');//modeule,library//node API
const { setInterval } = require('timers/promises');

var counter=1;
function write(){
    counter++;
    var message="welcome "+ counter
    fs.writeFile("hello.txt",message,()=>{
        console.log('content is written in the file')
    });
}

// function read(){
//     fs.readFile("hello.txt",(err, data)=>{
//         console.log(data);
//     })
// }


setInterval(write,5000);
// setInterval(read,10000);