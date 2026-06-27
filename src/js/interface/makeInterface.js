// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    ba(ce('hr'));

    //-//

    for (let x = 0; x < TUTORIALS.length; x++)
    {
        let theLink = ce('a');
        theLink.target = '_blank';
        theLink.textContent = TUTORIALS[x].name;
        theLink.href = TUTORIALS[x].url;
        ba(theLink);

        ba(ce('hr'));
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

