//routes/portfolio
module.exports = function(app){

    var controller = app.controllers.portfolio;

    app.route('/portfolio')
        .get(controller.index);
}