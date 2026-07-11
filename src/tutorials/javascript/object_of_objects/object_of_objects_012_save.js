// object_of_objects_012_save.js

let worldObject = {
    "tree_01":
    {
        type: "oak",
        x: 100,
        y: 200,
        collidable: true
    },

    "rock_01":
    {
        type: "boulder",
        x: 300,
        y: 150,
        collidable: true
    },

    "spawn_point":
    {
        type: "portal",
        x: 0,
        y: 0,
        active: false
    }
};

// Keyboard Controls
document.addEventListener('keydown', function(event)
{
    // SAVE WORLD!
    if (event.key === 's')
    {
        let savedLevel = JSON.stringify(worldObject, null, 2);

        let date = new Date().toLocaleString('en-US');

        console.log('World Saved!' + ' ' + date);

        console.log(savedLevel);
    }
});

//----//

/*
When we press the letter S,
it will save the worldObject
and also print it to console!
*/

/*
World Saved! 7/11/2026, 3:25:01 AM
{
  "tree_01": {
    "type": "oak",
    "x": 100,
    "y": 200,
    "collidable": true
  },
  "rock_01": {
    "type": "boulder",
    "x": 300,
    "y": 150,
    "collidable": true
  },
  "spawn_point": {
    "type": "portal",
    "x": 0,
    "y": 0,
    "active": false
  }
}
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

