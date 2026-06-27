// object_of_objects_005.js

let pokemon = {
    Charazar: 
    {
        type: 'Fire',
        color: 'Yellow'
    },

    Pikachu:
    {
        type: 'Electric',
        color: 'Yellow' 
    },
};

// sort by type
let pokemonSortedByType = Object.entries(pokemon)
    .sort((a, b) => a[1].type.localeCompare(b[1].type));

console.log(pokemonSortedByType);

/*
Array [ (2) […], (2) […] ]
​
0: Array [ "Pikachu", {…} ]
​
1: Array [ "Charazar", {…} ]
​
length: 2
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

