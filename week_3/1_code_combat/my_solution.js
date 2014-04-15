// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
// rescue mission
// delete move right
// move up
// move right
// move right
// move down
// attack

this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


// grab the mushroom
// move right
// move left
// move up
// attack

this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

// Drink Me
// attack
// move right
// move down
// move up
// move right
// attack
 
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guards
// apparently we are just deleting code here and learning a new .command that will display a string
// oh wait.. here is some code for me
// move right
// move right
// move up
// move right
// Say what's up
// Move down
// Move Right
// Move up
// Move Right

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap!
// move down
// move down
// say hello
// move up
// move up
// attack!

this.moveDown();
this.moveDown();
this.say("Heya Big Fella");
this.moveUp();
this.moveUp();
this.say("Attack!");

// Taunt
// x4 movie insults

this.say("Your mother wears combat boots!");
this.say("You throw like a girl!");
this.say("You took the red pill!");
this.say("I see your schwartz is smaller than mine...");

// Cowardly Taunt
// move to position
// scream obscenities
// move to cover

this.moveXY(44,20);
this.say("Idiots!");
this.moveXY(70,20);

// tell friends to follow
// move to attack range
// tell friends to attack
// move away cowardly

this.say("Follow me fools!");
this.moveXY(62,44);
this.say("Attack!");
this.moveXY(75,63);

// Mobile Artillery
// move cannon
// attack first group
// judge range
// attack again
// attack second group
// judge range
// attack again


 
// Reflection:
// Write your reflection here.  This was fun!  As a gamer, something like this really gets me involved.  The idea of passing a level
// or gaining a score makes me like like I have progressed.  Not really sure about the whole pseudocode however.
// I am a trial and error type of person, I don't like to play out what I am going to do, I like to dive in and just do.
// But I will try it and see where it leads!  Fun exercise!


// What is this referring to? Think programming-wise rather than in the terms of the game. - "this" is referring to the object that you are manipulating.

// What does the () do in JavaScript?  -  The () is where you but the values for the function that you are accessing.

//  What is the point of the semicolons?  -  They signify the end of a command.
