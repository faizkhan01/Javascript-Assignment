//Feet To Mile Conversion.............

function feetToMile(feet){
    var mile= feet/5280;
    return mile.toFixed(5);
}
var result= feetToMile(9280);

if(result>=0){
    console.log('The result is' + ' ' + result+' '+ 'miles');
}
else{
    console.log('Distance cannot be negative');
}

//Wood Calculator......................

function woodCalculator(chair, table, bed){
    var chairCount= chair*1;
    var tableCount= table*3;
    var bedCount= bed*5;
    var totalWood= chairCount+tableCount+bedCount;
    return totalWood;
}
var woodCount= woodCalculator(20, 10, 5);
console.log(woodCount + ' '+'CFT Wood needed');

//Brick Calculator.....................

function brickCalculator(floor) {
    const brickPerFeet = 1000;
    if (floor <= 0) {
        return "There is no undergroud construction going on";
    } 
    else if (floor >= 1 && floor <= 10) {
        let feetPerFloor = 15;
        const totalFeet = feetPerFloor * floor;
        let totalBrick = brickPerFeet * totalFeet;
        return totalBrick;
    } 
    else if (floor >= 11 && floor <= 20) {
        let feetPerFloor = 12;
        const totalFeet = feetPerFloor * (floor - 10);
        let totalBrick = 150000 + brickPerFeet * totalFeet;
        return totalBrick;
    } 
    else {
        let feetPerFloor = 10;
        const totalFeet = feetPerFloor * (floor - 20);
        let totalBrick = 270000 + brickPerFeet * totalFeet;
        return totalBrick;
    }
}
var result= brickCalculator(20);
console.log('Total'+' '+result+' '+'Bricks'+' '+'needed'); 

//Finding Tiny Friends Name..............

function tinyFriend(friends) {
    let tinyName = friends[0];
    
    for (let i = 0; i < friends.length; i++) {
        let friendName = friends[i];
        if (friendName.length < tinyName.length) {
            tinyName = friendName;
        }
    }
    return tinyName;
}

var tiny= tinyFriend(['Abir', 'Shahed', 'Shohag', 'Rasel', 'Piash', 'Jahangir', 'Khondokar', 'Chowdhury', 'Moi']);
console.log('The most tiny Friend is'+' '+tiny);

