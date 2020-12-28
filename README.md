<h1>PROJECT 2: REACT APPLICATION</h1> 

**Project title:** Comichub <br>
**Duration:** 1 week <br>

_Objective of the project: To develop a functional comic reader._ <br>

<img src="https://i.ibb.co/NnYqbPm/logo.png" />

**1. Wireframe of the planned layout:**
   - This was the initial plan for the home page layout however while doing the actual project I decided to change the carousel to just a jumbotron
   <img src="https://i.ibb.co/jMBfLw9/Home-1.png" />

**2. Home page that consists of featured comic and new comics: <br>**
   - Just to show my personal favorite superhero and the latest comic that is featured that is called from Marvel API. Includes the cover of the comic and also the option to read

**3. Login/Sign up: <br>**
   - Before users can start reading they will have to sign up or login. I used firebase authentication for this.
   - When signing up, users will be prompted via sweet alert if they make a mistake in the email and also if the password is less than six characters.
   - Once registered they will be redirected to the last page they visited before the login/signup prompt. 
      
**4. Read page: <br>**
  - This is the main part of the whole project. It is routed using the reference from the id of the comic taken from Marvel API. 
  - I uploaded the comics in firebase storage in accordance to the comic id.
  - Users can zoom in by double-clicking on a particular spot on the comic and also reset the transform by clicking the 'X' on the top left hand corner.
  - The comic can be navigated by the buttons. They can either choose to go through the pages or go to the next issue.
  - Below the comic are the characters involved in the particular issue. When clicked, it will take them to a character page. 
  
<img src="https://i.ibb.co/Jk6R1Jc/scrnli-06-11-2020-02-28-12.png">
 
**5. Character page: <br>** 
  - Shows the character that was pick and the number of appearances
  - Also list down the latest appearances to navigate to directly
  
**6. Search bar: <br>** 
  - Regular search bar which will do the API call once search button is clicked. Shows results of the relevant comics of which you can redirect to it. 

<img src="https://i.imgflip.com/17089w.jpg">

**Furthers: <br>**
   - I tried to do a better search feature using the debounce concept but was unable to achieve it. Would like to get this to work
   - Favorites feature where users can favorite a comic and it'll be tagged to their email...
<br><br>


**Technologies used:** <br>
- react, react-bootstrap, react-router-dom, react-zoom-pan-pinch
- axios
- sweet alert
- marvel API
- firebase storage