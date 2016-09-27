//routes/home
module.exports = function(app){

    var controller = app.controllers.home;

    app.route('/')
        .get(controller.index);
    
    app.route('/post')
        .get(controller.post);
    
    app.route('/login')
        .get(controller.login)
    
    app.route('/postagem')
        .post(controller.criaPost)
        .get(controller.getPost);
    
    /*app.route('/contatos')
        .get(controller.busca)
        .post(controller.cria);

    app.route('/:contato_id')
        .put(controller.atualiza)
        .get(controller.edita)
        .delete(controller.deleta);
        */
}