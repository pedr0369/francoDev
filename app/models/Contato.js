var mongoose = require('mongoose');

module.exports = function(){
    var ContatoSchema = new mongoose.Schema({
        nome: String,
        email: String,
        telefone: {type: Number, default: 0}
    });
    return mongoose.model('Contato', ContatoSchema);
};