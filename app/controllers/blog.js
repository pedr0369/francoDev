//controllers/home
var url = require('url');
module.exports = function(app){

    var controller = {};

    //chama a pagina
    controller.index = function(req, res){
        var path = url.parse(req.url).pathname;
        res.render('blog', {url: path});
    };

    return controller;
}