var mongoose = require('mongoose');

module.exports = function(){
    var UserSchema = new mongoose.Schema({
        nome: {type: String, required: true},
        login: {type: String, required: true, index: {unique: true}},
        senha: {type: String, required: true},
        posts: {type: Number, default: this.posts + 1 },
    });
    return mongoose.model('User', UserSchema);
};