// Get surprise image
const surpriseImage = document.getElementById('surpriseImage');

// Initialize an array of animal images
const animalImages = [
    'images/animals/bunny.jpg',
    'images/animals/butterfly.jpg',
    'images/animals/dolphin.jpg', 
    'images/animals/duck.jpg',
    'images/animals/horse.jpg',
    'images/animals/kitten.jpg', 
    'images/animals/lion.jpg',
    'images/animals/parakeet.jpg',
    'images/animals/puppy.jpg',
    'images/animals/turtle.jpg'
];

// Initialize an array of letter images
const letterImages = [
    'images/letters/pinkblue-a.jpeg',
    'images/letters/pinkblue-b.jpeg',
    'images/letters/pinkblue-c.jpeg',
    'images/letters/pinkblue-d.jpeg',
    'images/letters/pinkblue-e.jpeg'
];

// Initialize an array of number images

// Define selectRandomImage function
let shownImages = {};
let shownImagesCount = 0;

function selectRandomImage() {
    let randomNumber = Math.floor(Math.random() * animalImages.length);

    // Don't repeat images
    if (!shownImages[randomNumber]){
        // Set surpriseImage src to random image
        surpriseImage.src = animalImages[randomNumber];
        shownImages[randomNumber] = true;
        shownImagesCount++;
        if (shownImagesCount === animalImages.length){
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
        overlayCtx.fillStyle = 'pink';
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

// Add event for button click
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', (e) => {
    resetCanvas();
});

// Run the functions
selectRandomImage();
setCanvas();