// Get surprise image
const surpriseImage = document.getElementById('surpriseImage');

// Initialize an array of animal images
const animalImages = [
    'images/animals/bunny.jpg',
    'images/animals/butterfly.jpg',
    'images/animals/dolphin.jpg', 
    'images/animals/duck.jpg',
    'images/animals/giraffe.jpg',
    'images/animals/horse.jpg',
    'images/animals/kitten.jpg', 
    'images/animals/lion.jpg',
    'images/animals/monkey.jpg',
    'images/animals/parakeet.jpg',
    'images/animals/peacock.jpg',
    'images/animals/polar-bear.jpg',
    'images/animals/puppy.jpg',
    'images/animals/seahorse.jpg',
    'images/animals/turtle.jpg'
];

// Initialize an array of letter images
const letterImages = [
    'images/letters/pinkblue-a.png',
    'images/letters/pinkblue-b.png',
    'images/letters/pinkblue-c.png',
    'images/letters/pinkblue-d.png',
    'images/letters/pinkblue-e.png',
    'images/letters/pinkblue-f.png',
    'images/letters/pinkblue-g.png',
    'images/letters/pinkblue-h.png',
    'images/letters/pinkblue-i.png',
    'images/letters/pinkblue-j.png',
    'images/letters/pinkblue-k.png',
    'images/letters/pinkblue-l.png',
    'images/letters/pinkblue-m.png',
    'images/letters/pinkblue-n.png',
    'images/letters/pinkblue-o.png',
    'images/letters/pinkblue-p.png',
    'images/letters/pinkblue-q.png',
    'images/letters/pinkblue-r.png',
    'images/letters/pinkblue-s.png',
    'images/letters/pinkblue-t.png',
    'images/letters/pinkblue-u.png',
    'images/letters/pinkblue-v.png',
    'images/letters/pinkblue-w.png',
    'images/letters/pinkblue-w.png',
    'images/letters/pinkblue-y.png',
    'images/letters/pinkblue-z.png'
];

// Initialize an array of number images
const numberImages = [
    'images/numbers/aurora-1.png',
    'images/numbers/aurora-2.png',
    'images/numbers/aurora-3.png',
    'images/numbers/aurora-4.png',
    'images/numbers/aurora-5.png',
    'images/numbers/aurora-6.png',
    'images/numbers/aurora-7.png',
    'images/numbers/aurora-8.png',
    'images/numbers/aurora-9.png'
];

// Define selectRandomImage function
let shownImages = {};
let shownImagesCount = 0;
let selectedArray = animalImages;

function selectRandomImage() {
    let randomNumber = Math.floor(Math.random() * selectedArray.length);

    // Don't repeat images
    if (!shownImages[randomNumber]){
        // Set surpriseImage src to random image
        surpriseImage.src = selectedArray[randomNumber];
        shownImages[randomNumber] = true;
        shownImagesCount++;
        if (shownImagesCount === selectedArray.length){
            shownImagesCount = 0;
            shownImages = {};
        }
    } else {
        selectRandomImage();
    }
}

// Get overlay canvas and canvas context
const overlayCanvas = document.getElementById('overlayCanvas');
const overlayCtx = overlayCanvas.getContext('2d');

// Define setCanvas function
function setCanvas() {

    // Set canvas size equal to image size
    surpriseImage.onload = () => {
        overlayCanvas.width = surpriseImage.offsetWidth;
        overlayCanvas.height = surpriseImage.offsetHeight;

        // Draw an overlay on the overlay canvas
        overlayCtx.fillStyle = '#FFCDDF';
        overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    }
}

// Define resetCanvas function
function resetCanvas() {
    // Run the functions
    selectRandomImage();
    setCanvas();
};

// Scratch function for mouse/touch interaction (used ChatGPT)
function scratch(e) {
    // Get the mouse/touch position relative to the overlay canvas
    const rect = overlayCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use 'destination-out' to erase only on the overlay canvas
    overlayCtx.globalCompositeOperation = 'destination-out';
    overlayCtx.beginPath();
    overlayCtx.arc(x, y, 50, 0, Math.PI * 2, false);
    overlayCtx.fill();
    overlayCtx.closePath();
}

// Set up the event listeners for scratch effect on overlay canvas
overlayCanvas.addEventListener('mousemove', scratch);
overlayCanvas.addEventListener('touchmove', (e) => scratch(e.touches[0]));

// Add event for reset button
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', (e) => {
    resetCanvas();
});

// Add events for theme buttons
const themeAnimalsButton = document.getElementById('themeAnimalsButton');
const themeLettersButton = document.getElementById('themeLettersButton');
const themeNumbersButton = document.getElementById('themeNumbersButton');

themeAnimalsButton.addEventListener('click', (e) => {
    selectedArray = animalImages;
    resetCanvas();
    themesModal.style.display = "none";
});

themeLettersButton.addEventListener('click', (e) => {
    selectedArray = letterImages;
    resetCanvas();
    themesModal.style.display = "none";
});

themeNumbersButton.addEventListener('click', (e) => {
    selectedArray = numberImages;
    resetCanvas();
    themesModal.style.display = "none";
});

// Display and close themes and info modals

// Get the modals
const themesModal = document.getElementById('themesModal');
const infoModal = document.getElementById('infoModal');

// Get the buttons that open the modal
const themesButton = document.getElementById("themesButton");
const infoButton = document.getElementById("infoButton");

// Get the <span> element that closes the modals
const themesClose = document.getElementById("themesClose");
const infoClose = document.getElementById("infoClose");

// When the user clicks on the button, open the modal
themesButton.onclick = function() {
    themesModal.style.display = "block";
}

infoButton.onclick = function() {
    infoModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
themesClose.onclick = function() {
    themesModal.style.display = "none";
}

infoClose.onclick = function() {
    infoModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == themesModal) {
    themesModal.style.display = "none";
  } else if (e.target == infoModal) {
    infoModal.style.display = "none";
  }
}

// Run the functions
selectRandomImage();
setCanvas();