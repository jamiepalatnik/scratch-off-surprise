// Get surprise image
const surpriseImage = document.getElementById('surpriseImage');

// Initialize an array of animal images
const animalImages = [
    'images/butterfly.jpg',
    'images/dolphin.jpg', 
    'images/duck.jpg',
    'images/horse.jpg',
    'images/puppy.jpg'
];

function selectRandomImage() {
    let randomNumber = Math.floor(Math.random() * animalImages.length);

    // Set surpriseImage src to random image
    surpriseImage.src = animalImages[randomNumber];
};

// Run the selectRandomImage function
selectRandomImage();

// Get overlay canvas and canvas context
const overlayCanvas = document.getElementById('overlayCanvas');
const overlayCtx = overlayCanvas.getContext('2d');

// Set canvas size equal to image size on load
surpriseImage.onload = () => {
    overlayCanvas.width = surpriseImage.offsetWidth;
    overlayCanvas.height = surpriseImage.offsetHeight;

    // Draw an overlay on the overlay canvas
    overlayCtx.fillStyle = 'pink';
    overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
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