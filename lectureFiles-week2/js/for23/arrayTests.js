
//https://dmitripavlutin.com/operations-on-arrays-javascript/

//FOR EACH 
const forEachTest = function (theInArr) {
    let nArr = [];
    theInArr.forEach(function (item) {
        nArr.push(item * 2);
    })
    return nArr;

}
export { forEachTest };


// USED SUPER OFTEN - lets incorporate with the restOP...
//The map() method creates a new array populated with the results of calling a provided function 
//on every element in the calling array. 

export const mapVals = function (inArr) {

    // pass a function to map
    // i.e. for every element multiple by 3
    return (inArr.map(x => x * 10))

    //same but old syntax!
    //return (inArr.map(function(x){return x*3}))
}
export const mapValsPassFunc = function (inArr, func) {

    // pass a function to map
    return (inArr.map(func))


}
//filter
export const filterValsFunc = function (inArr, filterValIn) {
    //filter out the values that DO NOT meet the criteria
    return inArr.filter(
        //condition -> return the elements when the element is less then the filter val
        function (e1) {
            return (e1 <= filterValIn)
        }
    );
}

//reduce: reduces the array to a value by invoking callback function as a reducer.
export const reduceArrayFunc = function (inArr) {
    //keep adding each element in the array together.
    function sum(accumulator, num) {
        return accumulator + num
    }
    return inArr.reduce(sum);
}
//sort IN PLACE A - no copy is made...
//using the ... as a rest OP ()
export const sortStringsFunc = function (inArr) {
    return inArr.sort();
    //also can add  our own compare function  - 
    //default sort order is ascending, 
    //built upon converting the elements into strings, 
    //then comparing their sequences of UTF-16 code units values.


}
//sort IN PLACE B - no copy is made...
export const sortNumsFunc = function (inArr) {
    //to compare numbers... compare 2 if a>b result is + AND Put a after B, 
    //if a<b then result is - so a goes before B
    function compareNumbers(a, b) {
        return a - b;
    }
    return inArr.sort(compareNumbers);
}


// concatenates to the original array one or more arrays.
//RETURNS A  NEW ARRAY (old ones are untouched)
export const concatArraysFunc = function (arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3);
}

//new ES7 feature ;; array.includes() - finding an item in a list
// Includes() example No.1:
export const includesExFunc = function (theArr, theTerm, num = 0) {
    return theArr.includes(theTerm, num);
}

//array.find(function) 
//method returns the first array item that satisfies the function.
//This is AN example predicate function .... 
function isEven(num) {
    return num % 2 === 0
}

//NOW we can use  the find to  check if the array contains an even num
export const findExFunc = function (theArr) {
    return theArr.find(isEven);
}





