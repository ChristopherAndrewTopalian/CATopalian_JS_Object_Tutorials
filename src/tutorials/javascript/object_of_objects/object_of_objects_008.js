// object_of_objects_008.js

const cortex = {
    bird:
    {
        root: null,
        related: ["robin", "eagle", "hawk", "crow", "blue jay"], // order = what comes to mind first
        attributes: ["feathers", "beak", "hollow bones"]
    },

    robin:
    {
        root: "bird",
        related: ["worm", "spring", "morning"],
        colors: ["red breast", "brown back"]
    },

    worm:
    {
        root: null,
        related: ["robin", "dirt", "rain"],
        attributes: ["soft", "blind"]
    }
};

console.log(cortex.bird.related);

/*
Array(5) [ "robin", "eagle", "hawk", "crow", "blue jay" ]
​
0: "robin"
​
1: "eagle"
​
2: "hawk"
​
3: "crow"
​
4: "blue jay"
​
length: 5
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

