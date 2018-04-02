var Post = require('../../models/post')
var router = require('express').Router()

router.get('/', function (req, res, next) {
    /*
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
    */
   Post.find()
   .sort('-date')
   .exec(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
   })
    /*res.json([
        {
            username: 'alexander',
            body: 'test post'
        }
    ])
    */
})

router.post('/', function (req, res) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })
    post.save(function (err, post, next) {
        if (err) { return next(err) }
        res.json(201, post)  //deprecated
        //res.status(status).json(post)
    })
    //console.log('post received!')
    //console.log(req.body.username)
    //console.log(req.body.body)
    //res.sendStatus(201)
})

module.exports = router

//curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\":\"alexander\",\"body\":\"test post\"}" localhost:3000/api/posts
