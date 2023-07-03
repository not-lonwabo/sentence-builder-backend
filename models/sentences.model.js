const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
    sentece: { type: Array, required: true },
});

const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence