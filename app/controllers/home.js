//controllers/home
var url = require('url');
var fs = require('fs');

module.exports = function(app){
    Post = app.models.Post;
    var controller = {};

    //chama a pagina
    controller.index = function(req, res){
        var path = url.parse(req.url).pathname;
        res.render('index', {url: path});
    };
    
    controller.getPost = function(req, res){
        Post.find(function(err, contatos){
            if(err)
                res.send(err);
            res.json(contatos);
        });
    };   
    
    controller.post = function(req, res){
        var path = url.parse(req.url).pathname;
        res.render('Post', {url: path});
    };
    
    controller.login = function(req, res){
        var path = url.parse(req.url).pathname;
        res.render('login', {url: path});
    }
    
    controller.criaPost = function(req, res){
        Post.create({
            titulo: req.body.titulo,
            autor: req.body.autor,
            texto: req.body.texto,
        }, function(err, contato){
            if(err)
                res.send(err);
            else{
                console.log('contato criado');
            }
            Post.find(function(err, contatos){
                if(err)
                    res.send(err);
                res.json(contatos);
            });
        });
        console.log(req.body);
    };    
    
    /*
    //busca
    controller.busca = function(req, res){
        Contato.find(function(err, contatos){
            if(err)
                res.send(err);
            res.json(contatos);
        });
    };

    //atualiza
    controller.atualiza = function(req, res){
        var contatoData = req.body;
        var id = req.params.contato_id;

        Contato.update(
            {_id: id},
            contatoData,
            {upsert: true},
            function(err, contato){
                if(err)
                    res.send(err);
                res.json(contato);
        });
    };

    //edita
    controller.edita = function(req,res){
        Contato.findOne({
            _id: req.params.contato_id
        }, function(err, contato){
            if(err)
                res.send(err)
            res.json(contato);
        });
    };

    //deleta
    controller.deleta = function(req, res){
        Contato.remove({
            _id: req.params.contato_id
        }, function(err, contato){
            if(err)
                res.send(err);
            Contato.find(function(err, contatos){
                if(err)
                    res.send(err);
                res.json(contatos);
            });
        });
    };
    */

    return controller;
}