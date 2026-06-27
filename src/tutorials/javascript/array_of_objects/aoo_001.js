// aoo_001.js

let pokemon = [
    {
        name: 'Pikachu',
        type: 'Electric',
        color: 'Yellow'
    },

    {
        name: 'Charazar',
        type: 'Fire',
        color: 'Red'
    }

];

// fibn.js
// findIndexByName
function fibn(whichArray, whichName)
{
    let index = whichArray.findIndex(function(a)
    {
        return a.name === whichName
    });

    return index;
}

console.log(pokemon[fibn(pokemon, 'Pikachu')].type);

/*
Electric
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

