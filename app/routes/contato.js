//routes/contato
module.exports = function(app){

    var controller = app.controllers.contato;

    app.route('/contatar')
        .get(controller.index);
}