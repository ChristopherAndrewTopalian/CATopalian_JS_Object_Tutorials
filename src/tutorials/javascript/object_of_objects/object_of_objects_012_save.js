// object_of_objects_012.js

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

        console.log('World Saved!');
        console.log(savedLevel);
    }
});

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

