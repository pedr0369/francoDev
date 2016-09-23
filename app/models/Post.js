var mongoose = require('mongoose');

module.exports = function(){
    var PostSchema = new mongoose.Schema({
        titulo: {type: String, required: true},
        chamada: {type: String},
        autor: String,
        data: {type: Date, default: Date.now},
        imagens: [],
        texto: {type: String, required: true}
    });
    return mongoose.model('Post', PostSchema);
};