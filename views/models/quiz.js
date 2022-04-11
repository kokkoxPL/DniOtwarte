const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    dane: String,
    nick: String,
    szkola: String,
    miejsce: String,
    wynik: Number,
}, { timestamp: true });

const Quiz = mongoose.model('results', quizSchema);
module.exports = Quiz;