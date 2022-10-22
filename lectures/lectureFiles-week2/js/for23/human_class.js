class Human{
    constructor(favColor){
       this.favColor = favColor; 
    }

    outFavColor(){
        return(`my favorite color in the parent class is:: ${this.favColor}`);
    }
}
export default Human