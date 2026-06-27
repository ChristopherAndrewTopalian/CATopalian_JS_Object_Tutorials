// object_005.js

let pokemon = {
    pikachu: 'electric',
    charazar: 'fire',
    squirtle : 'water'
};

delete pokemon.pikachu;

for (let key in pokemon)
{
    // key shows pikachu name
    // pokemon[key] shows electric
    console.log(key + ' and ' + pokemon[key]);
}

/*
charazar and fire
Squirtle and water
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

