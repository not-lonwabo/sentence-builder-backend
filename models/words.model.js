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

/**
 * @openapi
 * components:
 *   schemas:
 *     Words:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         nouns: 
 *           type: array
 *           items:
 *             type: string
 *           example: ['people', 'man']  
 *         verbs:
 *           type: array
 *           items:
 *             type: string
 *           example: ['sing', 'run']
 *         adjectives:
 *           type: array
 *           items:
 *             type: string
 *           example: ["good", "young"]
 *         adverbs:
 *           type: array
 *           items:
 *             type: string
 *           example: ["out", "back"]
 *         pronouns:
 *           type: array
 *           items:
 *             type: string
 *           example: ["she", "him"]
 *         prepositions: 
 *           type: array
 *           items:
 *             type: string
 *           example: ["about", "below"]
 *         conjunctions:
 *           type: array
 *           items:
 *             type: string
 *           example: ["and", "but"]
 *         determiners:
 *           type: array
 *           items:
 *             type: string
 *           example: ["that", "few"]
 *         exclamations:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Ouch!", "Sure!"]
 *         __v:
 *           type: number
 *           example: 0
 */
const Words = mongoose.model('Words', wordsSchema);

module.exports = Words