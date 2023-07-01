const express = require('express');
const router = express.Router();
const Model4 = require('../database/models/model4.js');

router.get('/route4', async (req, res) => {
    try {
        const data = await Model4.find();
        res.render('view4', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route4', async (req, res) => {
    const model4 = new Model4(req.body);
    try {
        await model4.save();
        res.redirect('/route4');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;