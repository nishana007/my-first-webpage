const http = require('http');
const url = require('url');

const flowers=[
    {title: 'tulip',color:'pink',id: 1},
    {title: 'rose',color:'yellow',id: 2},
    {title: 'blossom',color:'white',id: 3},
    ];

module.exports = http.createServer((req, res) => {

    const requrl = url.parse(req.url, true);
    var qdata = requrl.query;
    var idy =qdata.id;

    if (requrl.pathname == "/retrieveorder" && req.method === 'GET' && (idy == null || undefined)) 
    {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(flowers));
        res.end();
    }

    else if(requrl.pathname == '/retrieveorder' && req.method === 'GET' && (idy!== null || undefined))
    {
        const x = flowers.find(function(element)
    {
        if(element.id === parseInt(idy))
         return true;
           
    });
       
    if (!x) 
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid Request');
    }
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(x));
    res.end();
   }
    
    else if(requrl.pathname == '/retrieveorder' && req.method === 'POST') 
    {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        
        
        req.on('end', function () {

            postBody = JSON.parse(body);  
            const flower={
                id:flowers.length+1,
                title:postBody.flower_name,
                color:postBody.color
            };
           
            flowers.push(flower);
            console.log(body);
            console.log(flower);
            console.log(postBody);
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.write('uploaded data successfully');
            res.write(JSON.stringify(flower));
            res.end();
        
        });

        
        
    }
  
    else if(requrl.pathname == '/retrieveorder' && req.method === 'PUT')
    {
        const x = flowers.find(function(element)
    {
        if(element.id === parseInt(idy))
         return true;
           
    });
       
    if (!x) 
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid Request');
    }

    let body = '';
    req.on('data', chunk => {
            body += chunk;
        });
    
    req.on('end', function () {

        postBody = JSON.parse(body);
        x.title= postBody.flower_name;  
        x.color= postBody.color;
        console.log(x);
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('modified data successfully');
        res.write(JSON.stringify(x));
        res.end();
        
        });
    }

    
     else
    {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write(' Your endpoint ' + requrl.pathname +' is unavaialable');
        res.end();

    }
}).listen(8080,() => {
    console.log('Server running' );
});
