const express = require('express');
const router = express.Router();
const Model7 = require('../database/models/model7.js');

router.get('/route7', async (req, res) => {
    try {
        const data = await Model7.find();
        res.render('view7', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route7', async (req, res) => {
    const model7 = new Model7(req.body);
    try {
        await model7.save();
        res.redirect('/route7');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;