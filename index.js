// core node httpo module
const http = require("http");

//core node filesystem (fs) module...promise lets me send requests 
// to read files to the files system without making exicution of 
//code stop and wait for (fs) to come back and send data.. code can keep //going. stays truly asynchronis
const fs = require('fs').promises;

//responding to http requests
const requestHearing = function (req, res) {

  //sends back root with request url
    console.log(req.url)
      if(req.url === "/"){
          //checking  if request id for root, return html file
          // _dirname from node.js 
          fs.readFile(__dirname + "/begin.html")
            .then(filling => {
             console.log(filling)
              res.setHeader("Content-Type", "text/html; charset=UTF-8")
                res.writeHead(200);
                  res.end(filling);
            })
      }else{
        console.log("this is it")
          //if not '/' will send back json file
           fs.readFile(__dirname + "/stuff.json")
            .then(filling => {
              res.setHeader("Content-Type", "application/json; charset=UTF-8")
                res.writeHead(200);
                  res.end(filling);
            })
      }

  
 
  
  
};

//create http server instance
const server = http.createServer(requestHearing);

//need to define TCP port and IP adress for mu http  server to hear
const host= "0.0.0.0";
const port ="8080"

server.listen(
  port, host, () => {
    console.log( `Server is running on http://${host}:${port}`);

  }

); 