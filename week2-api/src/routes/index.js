var express = require('express');
var router = express.Router();
const mongo = require('./week')
    /* GET home page. */
router.get('/get', mongo.xuanran);
router.get('/getfind', mongo.xiangqing);
router.get('/getapp', mongo.xuanranpinglun);


module.exports = router;