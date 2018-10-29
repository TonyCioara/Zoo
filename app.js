// Create a GitHub repo,
// Clone repo locally
// npm init
// implement their endpoints,
// then commit
// push.
// At the very minimum, create two GET endpoints ---
// one that retrives an object by ID,
// and one that retreives a list of objects.

const express = require('express');
const app = express();

const zoos = {
    "San_Diego": {
        "hippo": "type 1",
        "lion": "type2"
    },
    "DC": {
        "zebra": "type 1",
        "koala": "type 3"
    }
}

// shows all zoos
app.get('/', function (req, res) {
    res.json(zoos);
})

app.get('/zoo/:zooId', function (req,res) {
    res.json(zoos[`${req.params.zooId}`]);
})

app.get('/zoo/:zooId/animals/:animalId', function (req, res) {
    res.json(zoos[`${req.params.zooId}`][`${req.params.animalId}`])
})

app.listen('3000', () => {
    console.log("hey");
})