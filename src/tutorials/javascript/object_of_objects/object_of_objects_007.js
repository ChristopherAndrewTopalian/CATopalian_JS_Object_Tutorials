// object_of_objects_007.js

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

for (let key in pokemon)
{
    console.log(key);
    console.log(pokemon[key]);
}

/*
Charizard
Object { type: "Fire", color: "Red" }
​
color: "Red"
​
type: "Fire"
​
<prototype>: Object { … }


Pikachu
Object { type: "Electric", color: "Yellow" }
​
color: "Yellow"
​
type: "Electric"
​
<prototype>: Object { … }
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

