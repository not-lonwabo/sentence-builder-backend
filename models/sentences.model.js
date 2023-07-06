const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
    sentence: { type: String, required: true },
});

/**
 * @openapi
 * components:
 *   schemas:
 *     Sentences:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         sentence: 
 *           type: string
 *           example: Here is a sentence
 *         __v:
 *           type: number
 *           example: 0
 */
const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence