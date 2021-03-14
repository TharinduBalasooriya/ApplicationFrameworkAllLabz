//console.log('Hello world');

//q2
/*
const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());
*/


//const fs = require('fs');



/*
fs.readFile(fileName,(err,data)=>{

    if(err){
        console.log(err);
    }
        //err is null ; false , err undefined false , err 0 is false, err = '' this false
    console.log(data.toString());
});
*/

/*const data = fs.readFileSync(fileName);
console.log(data.toString());*/


//q3

/*
console.log(__dirname);
const fileName = __dirname + '/test.txt';

const outFileName = __dirname + '/test-copy.txt';


const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);


readStream.on('data', data => {
    console.log(data.toString());
});
*/


//q5

/*
const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000);*/


const http = require('http');
http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/html');

    switch (req.method){
        case 'GET' :
            res.write('<h1>Hello world</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;

    }
}).listen(3000,err =>{
    console.log('Server is listning to port 3000 ');
})
