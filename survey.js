//import the 'readline' module
const readline = require('readline');
// set up the input and output streams for CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//question method to prompt the user with the following questions
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => { //callback function executed when user provides an answer
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite(e.g: dinner, lunch, etc.) ", (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (food) =>{
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What's your superpower? In a few words, tell us what you are amazing at! ", (superPower) =>{
              console.log(`${name} enjoys ${activity}, listens to ${music}, loves ${food} for ${meal}, is a fan of ${sport}, and possesses the incredible superpower of ${superPower}.`);
              rl.close();   //close CLI and program exit
            });
          });
        });
      });
    });
  });
});