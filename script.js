// 1
for (i=1; i<=7; i++) {
    console.log(i);
};

console.log(`============================`);

// 2
for (i=5; i<=25; i+=4) {
    console.log(i);
}

console.log(`============================`);


// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b
for (names of wizards){
    console.log(names);
};

console.log(`============================`);

// 4a
let harryPotterMovies = 0

// 4b
while (harryPotterMovies <=7){
    harryPotterMovies++;
};

// 4c
console.log(harryPotterMovies);

console.log(`============================`);

// 5a
const hogwartHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];

// 5b
for (houses of hogwartHouses){
    for (letters of houses){
        console.log(letters);
    };
};

console.log(`============================`);

// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b
for (all=0; all<=0; all++){
    console.log(quote.join(` `));
};

console.log(`============================`);

// 7
for (i=1; i<=25; i++){
    if (i%3===0 && i%5===0){
        console.log(`Expecto Patronum`);
    } else if (i%3===0){
        console.log(`Expecto`);
    } else if (i%5===0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}