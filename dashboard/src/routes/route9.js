const express = require('express');
const router = express.Router();
const Model9 = require('../database/models/model9.js');

router.get('/route9', async (req, res) => {
    try {
        const data = await Model9.find();
        res.render('view9', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route9', async (req, res) => {
    const model9 = new Model9(req.body);
    try {
        await model9.save();
        res.redirect('/route9');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;