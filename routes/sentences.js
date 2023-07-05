const router = require('express').Router();
let Sentences = require('../models/sentences.model');

router.route('/').get((req, res) => {
    Sentences.find()
        .then(sentences => res.json(sentences))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/submit').post((req, res) => {
    const sentence = req.body.sentence;

    const newSentence = new Sentences({sentence});

    newSentence.save()
        .then(() => res.json('Sentence added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;