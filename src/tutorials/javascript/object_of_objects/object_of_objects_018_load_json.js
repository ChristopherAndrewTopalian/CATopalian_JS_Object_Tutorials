// object_of_objects_018_load_json.js

let world = {};

let worldDataText = `
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

  "flower_01": {
        "type": "daisy",
        "x": 460,
        "y": 300,
        "collidable": false
    }
}
`;

// worldLoader.js, the ONLY code that knows how to build a world from data
function loadWorld(jsonData)
{
    let world = {};

    let raw = JSON.parse(jsonData);

    for (let id in raw)
    {
        world[id] = createEntity(id, raw[id]); // your factory function, reused here
    }

    return world;
}

function createEntity(id, data) {
    return {
        id: id,
        type: data.type,
        x: data.x,
        y: data.y,
        collidable: data.collidable
    };
}

world = loadWorld(worldDataText);

console.log("World Loaded! Tree type is: " + world["tree_01"].type);

//----//

/*
World Loaded! Tree type is: oak
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

