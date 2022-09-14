//has a default - we do not need to give the exact name
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
import Person from './for23/person_class.js';

// New object instance :)
let p = new Person('sabine', 'magenta');
document.querySelector("#exPerson_1 #p1").innerHTML = p.outName();
document.querySelector("#exPerson_1 #p2").innerHTML = p.outFavColor();

// // //PART THREE

// //3b)
// import { utilityMultipleThree, utilityConCatThree, utilityDivAndSubtractFour } from './for23/utility.js';


// // //from 3a)
// //import { utilityMultipleThree } from './for23/utility.js';
// let returnedVal = utilityMultipleThree(4, 6, 7);
// document.querySelector("#exUtility #p3").innerHTML = returnedVal;

// //from 3aa)
// //import { utilityConCatThree } from './for23/utility.js';
// let returnedValTwo = utilityConCatThree("a tomato", "a carrot", "a banana");
// document.querySelector("#exUtility #p4").innerHTML = returnedValTwo;



// // from 3aaa)
// //import { utilityDivAndSubtractFour } from './for23/utility.js';
// let returnedValThree = utilityDivAndSubtractFour(2, 3, 4, 12);
// document.querySelector("#exUtility #p5").innerHTML = returnedValThree;

// //NEW 4::
// import { forEachTest } from './for23/arrayTests.js';
// let newArr = forEachTest([4, 8, 12]);
// document.querySelector("#exUtilityB #p5a").innerHTML = newArr;

// //NEW  5
// import { mapVals } from './for23/arrayTests.js';
// let newArrMapped = mapVals([4, 8, 12]);
// document.querySelector("#exUtilityB #p6a").innerHTML = newArrMapped;

// //NEW  6
// import { mapValsPassFunc } from './for23/arrayTests.js';
// let newArrMappedPassFunc = mapValsPassFunc([4, 8, 12], function (x) { return x / 2 });
// document.querySelector("#exUtilityB #p7a").innerHTML = newArrMappedPassFunc;

// // NEW 7
// import { filterValsFunc } from './for23/arrayTests.js';
// let filteredVals = filterValsFunc([4, 8, 12, 37, 0, 90, 23.4, -90, 45], 10);
// document.querySelector("#exUtilityB #p8a").innerHTML = filteredVals;

// //NEW 8
// import { reduceArrayFunc } from './for23/arrayTests.js';
// let reducedVal = reduceArrayFunc([1, 2, 3, 4, 5]);
// document.querySelector("#exUtilityB #p9a").innerHTML = reducedVal;

// //NEW 9
// import { sortStringsFunc, sortNumsFunc } from './for23/arrayTests.js';
// let sortedStrings = sortStringsFunc(["kiwis", "bananans", "apples", "pears", "cherries", "strawberries"]);
// document.querySelector("#exUtilityB #p10a").innerHTML = sortedStrings;
// let sortedNums = sortNumsFunc([100, 90, 56, 23, -3, 56, -56, 0, 23, 0]);
// document.querySelector("#exUtilityB #p11a").innerHTML = sortedNums;

// //10
// import { concatArraysFunc } from "./for23/arrayTests.js";
// let arr1 = ["kiwis", "bananans", "apples", "pears", "cherries", "strawberries"];
// let arr2 = [100, 90, 56, 23, -3, 56, -56, 0, 23, 0];
// let arr3 = ["a tomato", "a carrot", "a banana"];

// let concatArray = concatArraysFunc(arr1, arr2, "string");
// //console.log(concatArray);
// document.querySelector("#exUtilityB #p12a").innerHTML = concatArray;
// //here willjust return a string....
// let concatArraysTwo = concatArraysFunc("2", 4, "string");
// //console.log(typeof (concatArraysTwo));
// document.querySelector("#exUtilityB #p13a").innerHTML = concatArraysTwo;
// // for it to return an array - THE first element needs to be an array 
// let concatArraysThree = concatArraysFunc([1, 2, 3, 4], "2", 4);
// //console.log(concatArraysThree)
// document.querySelector("#exUtilityB #p14a").innerHTML = concatArraysThree;

// //11
// import { includesExFunc } from "./for23/arrayTests.js";
// let origArr = ['Ruby', 'JavaScript', 'Python', 'C++', 'Swift', 'lisp'];
// let testA = includesExFunc(origArr, 'JavaScript');
// let testB = includesExFunc(origArr, 'C');
// /** Instead of starting from begin of list: 
//   * it will start from the index you specified and ignore 
//   * all values or items that exist in the array before this index. */
// //using the index parameter
// let testC = includesExFunc(origArr, 'Python', 1);
// let testD = includesExFunc(origArr, 'Python', 3);
// document.querySelector("#exUtilityB #p15a").innerHTML = testD;

// //13
// import { findExFunc } from "./for23/arrayTests.js";
// let origArrA = ['Ruby', 'JavaScript', 'Python', 'C++', 'Swift', 5];
// let testFindA = findExFunc(origArrA);

// let origArrB = [22, 'JavaScript', 'Python', 'C++', 'Swift', 5];
// let testFindB = findExFunc(origArrB);
// //returns undefined if no instance found
// //or the first item that matches
// document.querySelector("#exUtilityB #p16a").innerHTML = testFindB;