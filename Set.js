'use strict'

const { SetClass } = require("./Data-Structures")

let setA = new SetClass();
setA.add(1);
setA.add(2);
let setB = new SetClass();
setB.add(1);
setB.add(2);
setB.add(3);
let setC = new SetClass();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));
console.log(setA.subset(setC));
/* let setA = new SetClass();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new SetClass();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
let unionAB = setA.union(setB);
console.log(unionAB.values());
let insersectionAB = setA.interseccion(setB);
console.log(insersectionAB.values())
let differenceAB = setA.difference(setB);
console.log(differenceAB.values())
const set = new SetClass();
set.add(1);
console.log(set.values()); //outputs ["1"]
console.log(set.has(1));   //outputs true
console.log(set.size());   //outputs 1
set.add(2);
console.log(set.values()); //outputs ["1", "2"]
console.log(set.has(2));   //true
console.log(set.size());   //2
set.remove(1);
console.log(set.values()); //outputs ["2"]
set.remove(2);
console.log(set.values()); //outputs [] */

