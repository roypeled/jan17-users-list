let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

let User = require("./UserModel");
let Post = require("./PostModel");

let router = express.Router();

function responder(res, promise){
    return promise
        .then( resolved => res.json(resolved) )
        .catch( err => res.status(500).send(err) );
}

router.route("/users")
    .get((req, res) => {
        responder(res, User.find());
    })
    .post((req, res) => {
        let user = new User(req.body);

        user.save()
            .then( user => res.json(user) )
            .catch( err => res.status(500).send(err) );
    });

router.route("/users/:id")
    .get((req, res) => {
        let {id} = req.params;

        User.findById(id)
            .then( user => res.json(user) )
            .catch( err => res.status(500).send(err) );
    });

router.route("/users/:id/posts")
    .get((req, res) => {
        Post.find({ author: req.params.id })
            .then(post => res.json(post))
            .catch(err => res.status(500).send(err));
    })
    .post( (req, res) => {
        let {title, body, tags} = req.body,
            author = req.params.id,
            post = new Post({title, body, author, tags});

        post.save()
            .then(post => res.json(post))
            .catch(err => res.status(500).send(err));
    });

router.route("/posts")
    .get((req, res) => {
        let {author, page = 1, limit = 3, tags} = req.query,
            filter = {};

        if(author)
            filter.author = author;

        if(tags)
            filter.tags = tags;

        Post.paginate(filter, {page, limit, populate: "author"})
            .then(page => res.json(page))
            .catch(err => res.status(500).send(err));
    });



app.use("/api", router);

app.listen(9090);
