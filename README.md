# Mobile Flashcards Udacity Project
It is a mobile application (Android) that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## How To Install
Clone the source from github
git clone https://github.com/OlgaTal/mobile-flashcards.git

From the project root folder
* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## Notes
[1] The application was developed on Windows PC. <br/>
[2] The application was tested on Android cell phone using Expo - a developer tool for 
creating mobile applications with JavaScript and React Native. <br/>
[3] The application functionality matches Udacity project requirements with one caveat:<br/>
if deck has no cards, only 'Add Card' button shows, 'Start Quiz' button is hidden. 
To see the 'Start Quiz' button add at least one card to the deck.<br />
[4] There exists some extra functionality: for example, adding two default decks, when `Reset to Default` 
button is pressed in List Decks view. Also, the application clears all decks, 
when `Remove All` button is pressed.

## Project Template Installation Notes

I had issues installing the template for the project using npm 5 (as described in the course)... 

I had to downgrade npm 5 to npm 4, clear the npm cache, install yarn, and re-install the template. 

First I tried to do it on Mac. Unfortunately, I have limited access to it, 
so I could not install `yarn` (or even `brew` to that extent), and the steps above failed for me. 
In particular, even when the downgrade from npm 5 to 4 succeeded - 
without yarn installation still would fail.

I had to switch to Windows laptop (with full access as Administrator) - and was able to follow the steps 
above without a hitch. 


