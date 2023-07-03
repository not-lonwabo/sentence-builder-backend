const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wordsSchema = new Schema({
    nouns: { type: Array, required: true },
    verbs: { type: Array, required: true },
    adjectives: { type: Array, required: true },
    adverbs: { type: Array, required: true },
    pronouns: { type: Array, required: true },
    prepositions: { type: Array, required: true },
    conjunctions: { type: Array, required: true },
    determiners: { type: Array, required: true },
    exclamations: { type: Array, required: true }
});

const Words = mongoose.model('Words', wordsSchema);

module.exports = Words