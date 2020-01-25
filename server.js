// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

app.use(express.urlencoded());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/form", function(request, response) {
  response.sendFile(__dirname + "/views/form.html");
});

app.post('/submit-form', (req, res) => {
  const name = req.body.name
  const species = req.body.species
  const age = req.body.age
  const gender = req.body.gender
  const location = req.body.location
  const owner_name = req.body.ownerNam
  const owner_num = req.body.ownerNum
  
  writeFile("words.json", name, finished)
  writeFile("words.json", species, finished)
  writeFile("words.json", age, finished)
  writeFile("words.json", gender, finished)
  writeFile("words.json", location, finished)
  writeFile("words.json", owner_name, finished)
  writeFile("words.json", owner_num, finished)
  
  function finished(err){
    console.log("All set.")
  }
  
  console.log("Name: ")
  console.log(name)
  console.log("species: ")
  console.log(species)
  console.log("age: ")
  console.log(age)
  console.log("gender: ")
  console.log(gender)
  console.log("location: ")
  console.log(location)
  console.log("owner_name: ")
  console.log(owner_name)
  console.log("owner_number: ")
  console.log(owner_num)
  
  res.end()
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// var data = JSON.stringify(dataObject)
//filesystem.save(data fsf )