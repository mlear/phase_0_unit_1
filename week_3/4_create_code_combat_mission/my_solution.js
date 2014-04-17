// I worked by myself on this challenge

// Your mission description:
//  This mission is to sneak up on the munchkin without him noticing, then attack the munchkin and do a victory dance.  
//  The munchkin will be patrolling the hallway, don't get caught!
// 

// Pseudocode
// 
// We will define variables to create a hero and a munchkin. 
// The variables will include values that indicate the position of the vaiable to be displayed on the screen.
// The user will need to input direction to the hero variable to allow the hero to change position on the sreen.
// We will define functions to support the movement and actions of the variables.
// We will need seperate functions for movement on both the x and y access, along with the actions to attack and dance.
// We will need to compare the variables positions and actions to determine if the user was successful, or if the user was seen.
// We will need to display to the user the outcome of the mission.

// Initial Code

var = {
  id: "userHero";
  strength: "10";
  health: "10";
  position: Vector {
    x: 0
    y: 25
  }
}

var = {
  id: "munchkin";
  strength: "5";
  health: "5";
  position: Vector {
    x: 25
    y: 0
  }
}

var moveRight = function() {userHero.x += 5;};

var moveLeft = function() {userHero.x -= 5;};

var moveUp = function() {userHero.y += 5;};

var moveDown = function() {userHero.y -= 5;};

var attack = function() {munckin.health = (munchkin.health - var.strength);};

var dance = function() {return "Nice moves";);

var done = false;

var success = false;

while done = false {
  var userinput = prompt("Please type a command! (moveRight, moveLeft, moveUp, moveDown, attack, dance, or quit");
  
  if (userInput === "moveRight");
    {
      userHero.moveRight;
      if userHero.x === munchkin.x;
        {
          if userHero.y === munchkin.y;
          {
            done = true;
            return "You failed.";
          }  
        } 
    } else if (userInput === "moveLeft");
    {
      userHero.moveLeft;
      if userHero.x === munchkin.x;
        {
          if userHero.y === munchkin.y;
          {
            done = true;
            return "You failed.";
          }  
        } 
    } else if (userInput === "moveUP");
    {
      userHero.moveUP;
      if userHero.x === munchkin.x;
        {
          if userHero.y === munchkin.y;
          {
            done = true;
            return "You failed.";
          }  
        }
    } else if (userInput === "moveDown");
    {
      userHero.moveDown;
      if userHero.x === munchkin.x;
        {
          if userHero.y === munchkin.y;
          {
            done = true;
            return "You failed.";
          }  
        }
    } else if (userInput === "attack");
    {
      if ((userHero.x === (munchkin.x + 5) || (munchkin.x - 5)) && (userHero.y === munchkin.y);
        {
          return "Hit!";
          done = true;
          success = true;
        } else if ((userHero.y ==== (munchkin.y + 5) || (munchkin.y - 5)) && (userHero.x === munchkin.x); 
        {
          return "Hit!";
          done = true;
          success = true;
        } else { return "Swing and a miss!" };
    } else if (userInput === "dance")
      {
        return "That's a bit premature... try again";
    } else if (userInput === "quit") 
      {
        done = true;
      }
    } else {return "The instructions are quite simple"}
}     

if success = true {
  var wardance = prompt("Do a little dance!");
    if wardance === "dance" {
      dance()
    } else { return "Weak Sauce" };
} else {return "Reload the page to start again becuase I haven't figured out how to give you that option yet."}

// Refactored Code

// I feel like there is a way I can take down these if statements into one function that calls upon general variable and manipulates it according to its value
// I will try to figure this out when I have more time.  




// Reflection
// 
//   This was a lot harder then I thought it was going to be.  At first, I thought, ok, we need to be able to move
//   the variables up, down, left, and right, and allow actions.  But then we had to be able to track and compare.
//   And then you have to worry about wrong user input.  And then you have to code for various other things that could happen.
//   This exercies daunted me just becuase of time constraints and lack of knowledge, I feel like I could have spent hours
//   Hours more on this, and still not be done.  Let's not even talk about the bonus.
// 
// 
