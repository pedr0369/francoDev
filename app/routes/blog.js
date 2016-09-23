//routes/blog
module.exports = function(app){

    var controller = app.controllers.blog;

    app.route('/blog')
        .get(controller.index);
    
    app.route('/postagem')
        .get(controller.getPost);
}