<h1>PROJECT 2: REACT APPLICATION</h1> 

**Project title:** Comichub <br>
**Duration:** 1 week <br>

_Objective of the project: To develop a functional comic reader._ <br>

<img src="https://i.ibb.co/PWwkK6y/logo.png" />

**1. Wireframe of the planned layout:**
   - This was the initial plan for the home page layout however while doing the actual project I decided to change the carousel to just a jumbotron
   <img src="https://i.ibb.co/jMBfLw9/Home-1.png" />

**2. Display of featured comic: <br>**
   - Just to show my personal favorite superhero and the latest comic
  
**3. Random movement of the virus: <br>**
   - Using the random height and width function, I created various positions and simply animate the virus from the first point to the next
   - I also included the max width and height of the play area so the virus won't just stay in the middle of the play area
   - I do this a couple of times until the movement becomes unpredictable but within the play area
   - I had some challenges with this because the virus spawns on top of the player sometimes
      - I fixed this by putting an if conditional statement after making the random positions and checking it against the player position
      
**4. Collision detection: <br>**
  - I managed to do this by applying the concept of pythagoras theorem
      - Generally, I have to find the position of one element and retrieve the X and Y position of this element
      - After which, I find the position of another elemetn and retrieve its X and Y position
      - So I minus X of one element with another element to get the distance between the two elements horizontally
      - And minus Y of one element with another element to get the distance between the two elements vertically
      - From here we can get the diagonal distance between the two elements by applying the pythagoras theorem
      - c = √(a² + b²)
  - Using the theory, I managed to detect when the player hits the virus or the other way around.
  - I also added the player and the virus into an array. The player is always at position[0]. So I only had to do a for loop from position[1] onwards to check if the player is hitting any of the virus.
  - The challenge I had with this is returning the distance from a setInterval function because I want to be always checking. However I just decided to put the collision detection inside the main game instead of a separate function outside of the game.
  
<img src="https://pics.ballmemes.com/a2-b2-c2-the-pythagorean-theorem-is-still-just-a-6177788.png">
 
**5. Putting the game together: <br>** 
  - Generally, putting the functions together and create a playable game flow
  - Using event listeners for click events to navigate through different processes
  - Setting display to "none" or "block" to display the correct screen
  
**6. Highscore: <br>** 
  - Instead of having dodging endlessly, I have added a scoring system which is basically a setInterval function that stops when the game is over.
  - I did managed to store this score into localStorage and retrieve it at the highscore screen
      - Since localStorage can only store strings and cannot be null
      - I have to first check in the beginning of the game if the localStorage is null, if it is I set a default object
      - Once the game ends a for loop will check the score against the first 5 elements, if the score is higher than any of the 5, it will be stored in an object which will then be turned into a string using JSON.stringfy() and then will be pushed to localStorage
      - In highscore screen, the score will be retrieve from localStorage and be made back into an object by using JSON.parse() and then sorted according the highest one first and the top five will be displayed on the highscore screen. 

**6. Introducing the power up: <br>** 
   - Using the same method for spawning of elements, random movement and also calculating distance, I have added a power up
      - I only set it to be present for 5 seconds
      - It removes itself and 2 virus elements as well

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbUm5Zv7meUWJr_85uOFdGVqLERd8Dn63CMw&usqp=CAU">

**Furthers: <br>**
   - I would really love to add better game physics e.g. elements bouncing against each other naturally
   - Instead of scaling the virus so I can get to the game over screen, I would like to find a way to stop the animation. I know I can use setInterval on the randomMove() but it is being used inside the create function which I haven't found a way to use them separately and for the game to still work
<br><br>


**Technologies used:** <br>
- react, react-bootstrap, react-router-dom, react-zoom-pan-pinch
- axios
- sweet alert
- marvel API
- firebase storage