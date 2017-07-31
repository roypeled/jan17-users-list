let express = require("express");

let app = express();
let users = require("./usersList");

app.route("/api/users")
    .get((req, res) => {
        res.json(users);
    });

app.route("/api/users/:id")
    .get((req, res) => {
        let {id} = req.params;
        let [user] = users.filter(user => user.id == id);
        res.json(user);
    });

app.listen(9090);
