// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs")
const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  let animals = getData()
  
  console.log(animals)
  res.render('home', { animals: animals });
});

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/index", function(request, response) {
  response.sendFile(__dirname + "/views/home.ejs");
});

app.get("/form", function(request, response) {
  response.sendFile(__dirname + "/views/form.html");
});

app.get("/about_me", function(request, response) {
  response.sendFile(__dirname + "/views/about_me.html");
});
app.get("/our_purpose", function(request, response) {
  response.sendFile(__dirname + "/views/our_purpose.html");
});

app.post('/submit-form', (req, res) => {
  const name = req.body.name
  const species = req.body.species
  const age = req.body.age
  const gender = req.body.gender
  const location = req.body.location
  const owner_name = req.body.ownerNam
  const owner_num = req.body.ownerNum
  
  let currentJson = JSON.parse(fs.readFileSync('words.json', 'utf8'))
  
  let animalJson = {
    name: name,
    species: species,
    age: age, 
    gender: gender,
    location: location,
    owner_name: owner_name,
    owner_num: owner_num
  }
  
  currentJson.animals.push(animalJson)
  
  //console.log(currentJson)
  
  fs.writeFile('words.json', JSON.stringify(currentJson), 'utf8', (err) => {
    if (err) throw err;
    
    console.log('it saved!')
  })
  
  
  res.end()
})

function getData(){
  fs.readFile('words.json', (err) => {
    if (err) throw err;
    
    console.log('it saved!')
  })
  
  let currentJson = JSON.parse(fs.readFileSync('words.json', 'utf8'));
  
  return currentJson;
}

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// var data = JSON.stringify(dataObject)
//filesystem.save(data fsf )