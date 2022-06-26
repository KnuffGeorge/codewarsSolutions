// Given a string, swap the case for each of the letters.
// Examples

// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swap(str){
    return [...str].map(x=> isNaN(+x) && x === x.toUpperCase() ? x.toLowerCase() : isNaN(+x) && x === x.toLowerCase() ? x.toUpperCase(): x).join('')
   }