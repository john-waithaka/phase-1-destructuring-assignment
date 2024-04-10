const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


//delete eventually

// const traditionalAnimalNames = ['cat', 'dog', 'pig', 'cow'];
// const [catName, dogName, pigName, cowName] = traditionalAnimalNames;
// const traditionalAnimalColors = ['black', 'brown', 'white'];
// const [blackColor, brownColor, whiteColor] = traditionalAnimalColors;
// const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indg', 'violet'];
// const [r, o, y, g, b, i, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'indg', 'violet'];
// const { indg: Indigo } = { indg: 'indigo' };
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const [color1, color2, color3, color4, color5, color6, color7] = rainbowColors;
// const rainbowInitials = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];
// const [r1, o1, y1, g1, b1, i1, v1] = rainbowInitials;
// const { song2, song4, Kermit: { job, partner } } = {
//   song1: 'Song1',
//   song2: 'Song2',
//   song3: 'Song3',
//   song4: 'Song4',
//   Kermit: { job: 'Host', partner: 'Piggy' }
// };



//step by step test 1
const animalSounds = ['moo', 'neigh', 'baa', 'oink', 'cluck'];

// Destructuring the farmAnimals string into individual variables
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Destructuring the animalSounds array into individual variables
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = animalSounds;




//test 2
//based on the logic of test 1

const traditionalAnimalNames = ['cow', ' ', 'sheep', 'pig', 'chicken'];

// Destructure farmAnimals string into individual variables
const [bessie, dolly, babe, little] = farmAnimals.split(' ');

// Destructure traditionalAnimalNames array into individual variables
const [cowName, sheepName, pigName, chickenName] = traditionalAnimalNames;


// test 3
// 3) String: uses destructuring to declare the three traditional animal colors

const traditionalAnimalColors = ['blackAndWhite', 'black', 'pink'];
const [cow, sheep, pig] = traditionalAnimalColors;
console.log(cow);
console.log(sheep);
console.log(pig);


// 4) Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// 5) Array: uses destructuring to declare six rainbow color variables using initials and indg
const rainbowInitials = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];
const [r, o, y, g, b, i] = rainbowInitials;
const [, , , , , indg] = rainbowColors; 


//test 
// Destructure the muppet object into individual variables
const [muppetName, color, song, job, partner] = muppet;
console.log(muppetName);
console.log(color);
console.log(song);
console.log(job);
console.log(partner);





//last test
const { songs: [ , song2, , song4 ], details: { kermit: { job: nestedJob, partner: nestedPartner } } } = muppet;



