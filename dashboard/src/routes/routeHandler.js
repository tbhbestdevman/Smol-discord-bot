const express = require('express');
const router = express.Router();

const route1 = require('./route1');
const route2 = require('./route2');
const route3 = require('./route3');
const route4 = require('./route4');
const route5 = require('./route5');
const route6 = require('./route6');
const route7 = require('./route7');
const route8 = require('./route8');
const route9 = require('./route9');
const route10 = require('./route10');

router.use('/route1', route1);
router.use('/route2', route2);
router.use('/route3', route3);
router.use('/route4', route4);
router.use('/route5', route5);
router.use('/route6', route6);
router.use('/route7', route7);
router.use('/route8', route8);
router.use('/route9', route9);
router.use('/route10', route10);

module.exports = router;