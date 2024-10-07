import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';  
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);

const server = http.createServer((req,res)=>{
    let filePath;

    switch(req.url){
        case '/':
            filePath = join(__dirname,'index.html');
            break;
        case '/about':
            filePath = join(__dirname,'about.html');
            break;
        case '/contact':
            filePath = join(__dirname, 'contact-me.html')
            break;
        default:
            filePath = join(__dirname, '404.html')
    }

    fs.readFile(filePath, (err, data)=> {
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.end(`<h1> Server Error </h1>`)
        }
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(data)
    })
})

server.listen(8080, ()=>{
    console.log('server is running on port 8080')
})