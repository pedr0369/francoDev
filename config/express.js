var express = require('express');
var load = require('express-load');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(){
    var app = express();

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(logger('dev'));                                 
    app.use(bodyParser.urlencoded({'extended':'true'}));      
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());

    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    app.get('*', function(req, res) {
     res.status(404).render('404');
  });

    return app;
}