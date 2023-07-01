const express = require('express');
const router = express.Router();
const Model5 = require('../../database/models/model5');

router.get('/route5', async (req, res) => {
    try {
        const data = await Model5.find();
        res.render('view5', { data: data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.post('/route5', async (req, res) => {
    const newEntry = new Model5({
        // Assuming Model5 has a field 'content'
        content: req.body.content
    });

    try {
        const savedEntry = await newEntry.save();
        res.redirect('/route5');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;