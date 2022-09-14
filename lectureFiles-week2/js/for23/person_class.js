// // PART ONE :::
// class Person {
//     constructor(name, favColor) {
//         this.name = name;
//         this.favColor = favColor;
//     }
//     outName() {
//         return ("my name is:: " + this.name);
//     }
//     outFavColor() {
//         return (`my favorite color is:: ${this.favColor}`);

//     }
// }

// //PART TWO :::



import Human from './human_class.js';

class Person extends Human {

    constructor(name, favColor) {
        super(favColor);
        this.name = name;

    }
    outName() {
        return ("my name is in the child class:: " + this.name);
    }
}


//Default Exports (One per module)
export default Person