
/*
const orig = {
    test:'test',
    userDetails:{
        address:{
            province:'Province',
            city:'City'
        },
        name:'myObject'
       
    },
    mydef: ()=>{},
    undef:undefined
}

//const copy = Object.assign({},orig);
const copy = JSON.parse(JSON.stringify(orig));
copy.userDetails.name = 'Test sdfs'
//console.log(orig);
//console.log(copy);



function sum(...thisArgs){
    return thisArgs.reduce(function(previous,current){
                return previous+current;
    })
}


//console.log(sum(2,5,5));

class Shape {
    #privateVariable = "privateVariable";
    publicVariable = "publicVariable";
    static staticVariable = "staticVariable";
    
    constructor(height,width){
        this.height = height;
        this.width = width;
    }   

    getArea(){
        return 'Not implented';
    }
}
class Square extends Shape{
    getArea(){
        return this.height * this.width
    }

}
const myShape  = new Square(2,10);
console.log(myShape.getArea());

*/
function calculateSquareArea(){
   return new Promise(function(resolve,rejected){
    setTimeout(()=>{
        const  squareAre = 5*5;
        resolve(squareAre);

    },500);
   })
}

function onFullFill(data){
        console.log("OnFullFill: ", data);
}

function onRejected(reason){
    console.log("OnRejected: ", reason);
}
calculateSquareArea()
.then(onFullFill,onRejected);