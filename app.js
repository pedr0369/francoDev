var app = require('./config/express')();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post');

app.listen(8080, function(){
    console.log('Aplicação executada na porta 8080');
});