var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controller
todoController(app);


//listen tp port
app.listen(3000);
console.log('you are listening tp port 3000');
