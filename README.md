# Scratch-Off Surprise
#### Video Demo: Coming soon

## Introduction
Inspired by the scratch-off minigames in the game Florence, I decided to create a scratch-off game web app that allows the player to touch or hover over an overlay to reveal a surprise picture underneath.

My 3-year-old daughter loves to play Florence with me, but there are only a few examples of this scratch-off effect in the game. I decided to create my own version to expand the concept to create many different surprise experiences. You can think of it as a game, where the main mechanics are territorial acquisition (more of the picture is revealed as you clear the overlay) and discovery (a sense of wonder and surprise). I am also inspired by the task to reveal the map in games like those in The Legend of Zelda series.

The game is available as a free web app.

## How to play
1. Visit the site on desktop or mobile (mobile is best for little kids to play)
2. Touch or hover over the overlay to reveal the surprise image hidden underneath!
3. Choose a theme: animals, letters, or numbers.
4. Have fun!

## Code overview

### HTML
I envisioned the game as a single-page app. There are two main elements in the HTML: the surprise image with HTML canvas overlay, and the buttons below the image. The HTML also sets up two modal windows that open up when the player clicks the Themes or Info buttons. Themes allows the player to choose from the following themes: animals, letters, or numbers. Info shows information about the game and how to play. The center button is a reset button that selects a new surprise image and resets the canvas overlay. This button has a refresh icon that I added as an SVG, setting the width and height to fit the button size I wanted.

### CSS 
I needed to position the canvas overlay exactly over the surprise image, so I decided to use absolute positioning to accomplish this. At first I positioned both the image and the canvas separately using their unique IDs, but since the position values were exactly the same, later on I refactored the CSS to use a shared class for these values instead, both to follow CSS best practices to style classes instead of IDs, and to better follow the DRY principle of not repeating code. I also added properties to the body to remove scrollbars and attempt to reduce bounce on mobile so that the page would stay in place as the player reveals the surprise image. Finally, I styled the buttons and modals. I used absolute positioning for the modals as well as CSS grid to align the buttons so that the alignment worked well on all screen sizes.

### JavaScript
After uploading the animal, letter, and number images I wanted to use as the random surprise images hidden by the overlay, I added the image paths to three different arrays. I created a function to select a random image from the selected array. I scaled the `Math.random()` method to the range of the selected array to ensure that each image in the array could be returned. 

I found an idea on Stack Overflow to avoid repeating images, since whie playtesting with my daughter I noticed she got frustrated when the same image appeared multiple times in a row. To do this, I start by initializing 3 variables—`shownImages` is an empty opject that will keep track of whether a given image has already been shown, `shownImagesCount` is a counter for how many images have already been displayed, and is initally set to 0, and the `animalImages` array is set as the default `selectedArray`. After generating a random number from the range of the selected array, I have a conditional: If the random number points to an image in the array that has not been selected yet, I update the image source in the HTML to that image, and I also update the Boolean value in the `shownImages` object to `true` and increment `shownImagesCount`. When `shownImagesCount` reaches the size of the selected array, I reset the `shownImagesCount` and `shownImages` variable to their initial values to allow all the images to be selected once again. If the image has been shown already, I rerun the function. 

I use JavaScript to get the canvas and set it to the size of the selected random image. Then, I draw the overlay to the size of the image. I created a function called `resetCanvas()` to choose a new random image and reset the canvas so that I could run that function when the reset button is clicked. 

I created a function to power the scratch-off effect. I referred to code guidance from ChatGPT as well as a tutorial that showed a similar effect to learn how to do this effect, but I went through several iterations and customized the code myself to achieve the results I wanted. I used the `addEventListener()` method to trigger the scratch effect, the canvas reset, and the modals displayed by clicking the Themes and Info buttons. When buttons in the Themes modal are clicked, they update the `selectedArray` variable to the selected theme. Finally, I run the functions `selectRandomImage()` and `setCanvas()` at the end of the JavaScript code to set up the surprise image and overlay for the initial page load.

## References
* Code guidance from ChatGPT and Claude
* Scratch-off effect tutorial: https://webdesign.tutsplus.com/how-to-create-a-scratch-card-effect-in-vanilla-javascript--cms-108922t
* Idea to avoid repeating images when selecting a random image: https://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript?rq=3 
* Modal tutorial: https://www.w3schools.com/howto/howto_css_modals.asp

## Photo credits

All photos from Unsplash.

* Bunny  
https://unsplash.com/photos/white-and-brown-rabbit-kKAaCeGf5wY  
Photo by Sandy Millar

* Butterfly  
https://unsplash.com/photos/shallow-focus-photography-of-yellow-and-black-butterfly--TYvt5pmKng  
Photo by Aaron Burden

* Dolphin  
https://unsplash.com/photos/dolphin-jumping-on-sea-during-daytime-UaaHbkk40Ow  
Photo by Pagie Page

* Duck  
https://unsplash.com/photos/brown-and-white-duck-on-gray-concrete-floor-kCZSzqvIei4  
Photo by Ross Sokolovski

* Giraffe  
https://unsplash.com/photos/giraffe-walking-on-brown-field-during-daytime-NVXY8_M1n40  
Photo by Thomas Evans

* Horse  
https://unsplash.com/photos/white-horse-inside-barn-2eH_HQk5a6g  
Photo by Aaron Anz

* Kitten  
https://unsplash.com/photos/brown-tabby-kitten-sitting-on-floor-nKC772R_qog  
Photo by Edgar 

* Lion  
https://unsplash.com/photos/shallow-focus-photography-of-lion-at-the-wildlife-FC4GY9nQuu0  
Photo by jean wimmerlin

* Monkey  
https://unsplash.com/photos/an-animal-on-a-tree-R1vI7Gjtqg4  
Photo by Charles Betito Filho

* Parakeet  
https://unsplash.com/photos/green-and-yellow-small-beaked-bird-on-twig-OlKkCmToXEs  
Photo by Zdeněk Macháček 

* Peacock  
https://unsplash.com/photos/photo-of-blue-and-green-peacock-GvyyGV2uWns  
Photo by ricardo frantz 

* Polar bear  
https://unsplash.com/photos/a-polar-bear-standing-in-the-snow-looking-at-the-camera-yciR-hy59qY  
Photo by Robert Sachowski 

* Puppy  
https://unsplash.com/photos/long-coated-white-and-brown-puppy-TzjMd7i5WQI  
Photo by T.R Photography 

* Seahorse  
https://unsplash.com/photos/shallow-focus-photography-of-green-seahorse-fG1fdervp1E  
Photo by David Clode 

* Turtle  
https://unsplash.com/photos/brown-turtle-swimming-in-water-N5ByCirHVqw  
Photo by Abner abiu Castillo diaz 

* Letters background  
https://unsplash.com/photos/pink-and-blue-abstract-painting-Qiy4hr18aGs  
Photo by Pawel Czerwinski

* Numbers background  
https://unsplash.com/photos/galaxy-wallpaper-Oz2ZQ2j8We8  
Photo by Johny Goerend