'use strict';

let express = require('express');
let router = new express.Router();
let _ = require('../lib/translate')._;

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        indexPage: true,
        title: _('Self hosted email newsletter app')
    });
});

module.exports = router;
