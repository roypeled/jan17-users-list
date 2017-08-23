let db = require("./db");

let scheme = db.Schema({
    "author": { type: db.Schema.Types.ObjectId, ref: 'User', required: true },
    "title": { type: String, required: true },
    "body": { type: String, required: true },
});

let Post = db.model("Post", scheme);

module.exports = Post;
