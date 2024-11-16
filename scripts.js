// Get both canvases
const imageCanvas = document.getElementById('imageCanvas');
const overlayCanvas = document.getElementById('overlayCanvas');
const imageCtx = imageCanvas.getContext('2d');
const overlayCtx = overlayCanvas.getContext('2d');

// Load the image that will be revealed
const image = new Image();
image.src = 'images/duck.jpg';

image.onload = () => {
    // Set both canvases to the image dimensions
    imageCanvas.width = overlayCanvas.width = image.width;
    imageCanvas.height = overlayCanvas.height = image.height;
    
    // Draw the image on the image canvas (bottom layer)
    imageCtx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);
    
    // Draw an overlay on the overlay canvas (top layer)
    overlayCtx.fillStyle = 'pink';
    overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
};

// Scratch function for mouse/touch interaction
function scratch(e) {
    // Get the mouse/touch position relative to the overlay canvas
    const rect = overlayCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use 'destination-out' to erase only on the overlay canvas
    overlayCtx.globalCompositeOperation = 'destination-out';
    overlayCtx.beginPath();
    overlayCtx.arc(x, y, 50, 0, Math.PI * 2, false); // Adjust radius as needed
    overlayCtx.fill();
    overlayCtx.closePath();
}

// Set up the event listeners for scratch effect on overlay canvas
overlayCanvas.addEventListener('mousemove', scratch);
overlayCanvas.addEventListener('touchmove', (e) => scratch(e.touches[0]));
