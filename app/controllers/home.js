//controllers/home
module.exports = function(app){

    Contato = app.models.Contato;
    var controller = {};

    //chama a pagina
    controller.index = function(req, res){
        res.render('index');
    };

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

    //cria
    controller.cria = function(req, res){
        Contato.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            done: false
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

    return controller;
}