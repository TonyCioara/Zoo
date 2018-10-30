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
                "type": "mammal"
            },
            {
                "name": "lion",
                "type": "mammal"
            },
            {
                "name": "shark",
                "type": "fish"
            },
            {
                "name": "ant",
                "type": "insect"
            }
        ]
    },
    {   
        "name": "DC",
        "animals": [
            {
                "name": "zebra",
                "type": "mammal"
            },
            {
                "name": "koala",
                "type": "mammal"
            },
            {
                "name": "pigeon",
                "type": "bird"
            },
            {
                "name": "alligator",
                "type": "reptile"
            },
            {
                "name": "uchenna",
                "type": "mammal"
            }
        ]
    }
]

// shows all zoos
app.get('/', function (req, res) {
    res.json(zoos);
});

// Show one zoo
app.get('/zoos/:zooId', function (req,res) {
    res.json(zoos[`${req.params.zooId}`]);
});

// Show one animal at a zoo
app.get('/zoos/:zooId/animals/:animalId', function (req, res) {
    res.json(zoos[`${req.params.zooId}`]['animals'][`${req.params.animalId}`]);
});

// Show all animals by type
app.get('/zoos/animals/:type', function (req, res) {
    var selectedAnimals = [];
    zoos.forEach(zoo => {
        let animals = zoo.animals;
        animals.forEach(animal => {
            if (animal.type == req.params.type) {
                selectedAnimals.push(animal)
            }
        });
    });
    if (selectedAnimals.length == 0) {
        res.send('There are no animals of this type');
    } else {
        res.json(selectedAnimals);
    };
});

app.listen('3000', () => {
    console.log("hey");
});