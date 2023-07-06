const router = require('express').Router();
let Sentences = require('../models/sentences.model');

/**
 * @openapi
 * /sentences:
 *   get:
 *     tags:
 *       - Sentences
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Sentences"
 */
router.route('/').get((req, res) => {
    Sentences.find()
        .then(sentences => res.json(sentences))
        .catch(err => res.status(400).json('Error: ' + err))
});

/**
 * @openapi
 * /sentences/submit:
 *   post:
 *     tags:
 *       - Sentences
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string 
 *                   items: 
 *                     data: "This is a sentence!"
 */
router.route('/submit').post((req, res) => {
    const sentence = req.body.sentence;

    const newSentence = new Sentences({sentence});

    newSentence.save()
        .then(() => res.json('Sentence added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;