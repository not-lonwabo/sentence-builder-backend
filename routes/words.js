const router = require('express').Router();
let Words = require('../models/words.model');

router.route('/').get((req, res) => {
    Words.find()
        .then(words => res.json(words))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;