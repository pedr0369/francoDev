//controllers/home
var url = require('url');
module.exports = function(app){

    Post = app.models.Post;
    var controller = {};

    //chama a pagina
    controller.index = function(req, res){
        var path = url.parse(req.url).pathname;
        res.render('blog', {url: path});
    };
    
    controller.getPost = function(req, res){
        Post.find(function(err, contatos){
            if(err)
                res.send(err);
            res.json(contatos);
        });
    }; 

    return controller;
}