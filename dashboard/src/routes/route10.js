const express = require('express');
const router = express.Router();
const Model10 = require('../database/models/model10');

router.get('/route10', async (req, res) => {
    try {
        const data = await Model10.find();
        res.render('view10', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route10', async (req, res) => {
    const model10 = new Model10(req.body);
    try {
        await model10.save();
        res.redirect('/route10');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;