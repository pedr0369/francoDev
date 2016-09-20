//controllers/home
module.exports = function(app){

    var controller = {};

    //chama a pagina
    controller.index = function(req, res){
        res.render('contato');
    };

    return controller;
}