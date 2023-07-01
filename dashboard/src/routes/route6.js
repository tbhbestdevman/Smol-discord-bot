const express = require('express');
const router = express.Router();
const Model6 = require('../database/models/model6.js');

router.get('/route6', async (req, res) => {
    try {
        const data = await Model6.find();
        res.render('view6', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route6', async (req, res) => {
    const model6 = new Model6(req.body);
    try {
        await model6.save();
        res.redirect('/route6');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;