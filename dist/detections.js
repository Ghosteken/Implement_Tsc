"use strict";
//similar occurrences 
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide a valid id');
        return;
    }
    id.toLocaleLowerCase;
}
//dont do this
