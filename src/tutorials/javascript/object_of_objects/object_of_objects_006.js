// object_of_objects_006.js

let pokemon = {
    Charizard: 
    {
        type: 'Fire',
        color: 'Red'
    },

    Pikachu:
    {
        type: 'Electric',
        color: 'Yellow' 
    },
};

// sort by type
//let pokemonSortedByType = Object.entries(pokemon)
//    .sort((a, b) => a[1].type.localeCompare(b[1].type));

//console.log(pokemonSortedByType);

for (let key in pokemon)
{
    console.log(pokemon[key]);
}

/*
Object { type: "Fire", color: "Red" }
​
color: "Red"
​
type: "Fire"


Object { type: "Electric", color: "Yellow" }
​
color: "Yellow"
​
type: "Electric"
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

