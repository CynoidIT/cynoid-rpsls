const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const PORT = (process.env.PORT || 8000)

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page, params);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    name1 = params['player1']
    name2 = params['player2']
    //rps code here
    let rpsls = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    let winner = ''
    let p1Res = rpsls[Math.floor(Math.random()*5)]
    let p2Res = rpsls[Math.floor(Math.random()*5)]
    if (p1Res === p2Res){
      winner = 'TIE'
      }else if (p1Res === 'Rock' && p2Res === "Scissors"){ winner = `${name1} wins!`
      }else if (p1Res === 'Rock' && p2Res === "Lizard")
      { winner = `${name1} wins!`
      }else if (p1Res === 'Scissors' && p2Res === "Lizard")
      { winner = `${name1} wins!`  
      }else if (p1Res === 'Scissors' && p2Res === "Paper")
      { winner = `${name1} wins!`     
      }else if (p1Res === 'Lizard' && p2Res === "Paper")
      { winner = `${name1} wins!` 
      }else if (p1Res === 'Lizard' && p2Res === "Spock")
      { winner = `${name1} wins!` 
      }else if (p1Res === 'Paper' && p2Res === "Spock")
      { winner = `${name1} wins!`     
      }else if (p1Res === 'Paper' && p2Res === "Rock")
      { winner = `${name1} wins!` 
      }else if (p1Res === 'Spock' && p2Res === "Rock")
      { winner = `${name1} wins!` 
      }else if (p1Res === 'Spock' && p2Res === "Scissors")
      { winner = `${name1} wins!` 
      }else { winner = `${name2} wins!` 
      }

    //response
    res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name1 : params['player1'],
          name2 : params['player2'],
          results1 : p1Res,
          results2 : p2Res,
          winner: winner
        }
        res.end(JSON.stringify(objToJson));
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, console.log(`Server running on port ${PORT}`));
