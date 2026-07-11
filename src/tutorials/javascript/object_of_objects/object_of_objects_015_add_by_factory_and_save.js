// object_of_objects_015_add_by_factory_and_save.js

let world = {
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

// Define the Factory Function (The Automated Shipyard)
function createStarship(shipName, shipClass, currentStatus)
{
    // Return a completely brand new Object literal
    return {
        name: shipName,
        class: shipClass,
        status: currentStatus,
        shields: 100 // All ships start with 100% shields natively
    };
}

//----//

// we can add a star_ship_001 
// using dot notation
world.star_ship_001 = createStarship(
        'Enterprise', //name: shipName,
        'Constitution', //class: shipClass,
        'Docked', //status: currentStatus,
        100, //shields: 100 // All ships start with 100% shields natively
);

// or we can use brackets notation instead
// to add our object
/*
world.['star_ship_001'] = createStarship(
        'Enterprise', //name: shipName,
        'Constitution', //class: shipClass,
        'Docked', //status: currentStatus,
        100, //shields: 100 // All ships start with 100% shields natively
);
*/

// Keyboard Controls
document.addEventListener('keydown', function(event)
{
    // SAVE WORLD!
    if (event.key === 's')
    {
        let savedLevel = JSON.stringify(world, null, 2);

        let date = new Date().toLocaleString('en-US');

        console.log('World Saved!' + ' ' + date);

        console.log(savedLevel);
    }
});

//----//

/*
When we press the letter S,
it will save the world
and also print it to console!
*/

/*
World Saved! 7/11/2026, 11:07:37 AM
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
  },
  "star_ship_001": {
    "name": "Enterprise",
    "class": "Constitution",
    "status": "Docked",
    "shields": 100
  }
}
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting