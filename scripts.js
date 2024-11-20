// Get image, overlay canvas, and canvas context
const surpriseImage = document.getElementById('surpriseImage');
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