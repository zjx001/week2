const Mongo = require('mongodb-curd')
const Bname = 'week2'
module.exports = {

    xuanran: function(req, res, next) {
        Mongo.find(Bname, 'xiangqing', {}, function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    xiangqing: function(req, res, next) {
        const _id = req.query._id
        console.log(_id)
        Mongo.find(Bname, 'xiangqing', { _id: _id }, function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    pinglun: function(req, res, next) {
        Mongo.insert(Bname, 'xiangqing', req.body, function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    xuanranpinglun: function(req, res, next) {
        const _id = req.query._id
        console.log(_id)
        Mongo.find(Bname, 'xuanran', function(re) {
            if (re) {
                res.send({
                    code: 1,
                    data: re
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    }
}