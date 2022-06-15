import animal from "./animal.js";

console.log("Hello World")
var num = 10
for (let index = 1; index <= 10; index++) {
    
    if (index%2 ==0) {
        num++;
    }
}

console.log(num)


var ann = new animal("bobby", "dog")

ann.printName()
