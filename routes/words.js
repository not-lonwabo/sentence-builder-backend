const router = require('express').Router();
let Words = require('../models/words.model');

/**
 * @openapi
 * /words:
 *   get:
 *     tags:
 *       - Words
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
 *                     $ref: "#/components/schemas/Words"
 */
router.route('/').get((req, res) => {
    Words.find()
        .then(words => res.json(words))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;