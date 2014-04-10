#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS  - The elements tab allows you to see the elements in the page that you are inspecting, and also allows you to see the styles on the right side of chrome tools.  It will also tell you the source file for the css, and allow you to click on the link to jump to the source code.
  
  * Javascript Debugging - The console tab is used here and it allows you to run commands and check errors that are occuring in your script.  It provides links that will jump right to the code to allow you to fine tune.
  
  * Performance Optimization - This is done in the network tab and gives you a timeline on when your resources load.  You can then used the pagespeed extension to test the page and load suggestions on how to optimize the page.

* What's the quick key for your OS to spawn the Dev Tools inspector?  Ctrl-Shift-I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)  background-color: #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain. - You can't tweak the color becuase that text is part of the background image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? - 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
  *
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.  -  Using the network tab in chrome tools you can sort the different elements of the website by size, this was the largest image that loaded.

http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png - 316 KB

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? -  8.8 KiB could be eliminatd by Minifying the css, html, and JavaScript
