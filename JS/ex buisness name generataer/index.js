/*adjective
Crazy 
Amazing
fire

Shop name
Engine
foods
game

Another name 

ltd
bros
hub*/

let rand = Math.random();

let first, second, third;

if (rand<0.33) {
   first = "Creation" 
}

else if (rand<0.66 && rand>=0.33) {
    first = "Amazing"
}

else{
first = "fire"
}




if (rand<0.33) {
   second = "game" 
}

else if (rand<0.66 && rand>=0.33) {
    second = "foos"
}

else{
second = "Engine"
}

if (rand<0.33) {
   third = "ltd" 
}

else if (rand<0.66 && rand>=0.33) {
    second = "hub"
}

else{
second = "pvt ltd"
}

console.log(`${first} ${second} ${third}`);
console.log(rand);

