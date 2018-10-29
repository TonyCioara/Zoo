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

const zoos = [
    {  
        "name": "San_Diego",
        "animals": [
            {
                "name": "hippo",
                "type": 1
            },
            {
                "name": "lion",
                "type": 2
            }
        ]
    },
    {   
        "name": "DC",
        "animals": [
            {
                "name": "zebra",
                "type": 1
            },
            {
                "name": "koala",
                "type": 3
            }
        ]
    }
]

// shows all zoos
app.get('/', function (req, res) {
    res.json(zoos);
})

// Show one zoo
app.get('/zoos/:zooId', function (req,res) {
    res.json(zoos[`${req.params.zooId}`]);
})

// Show one animal at a zoo
app.get('/zoos/:zooId/animals/:animalId', function (req, res) {
    res.json(zoos[`${req.params.zooId}`]['animals'][`${req.params.animalId}`]);
})

app.listen('3000', () => {
    console.log("hey");
})