const express = require("express");
const _ = require("lodash");
const bodyParser = require("body-parser");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let toDoItems = [
    {
        content: "Write Friday Update"
    },
    {
        content: "Follow up with syndication contacts"
    },
    {
        content: "Write about time blocking"
    }
];

app.get("/", function(req, res) {
    res.render("Home", {listTitle: today, newListItems: toDoItems});
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});