// Get the image element and the container
var img = document.getElementById('zoomed-img');
var container = document.getElementById('container');

// Variables to store the current scale and position
var scale = 1;
var posX = 0;
var posY = 0;

// Variables to track mouse events
var isDragging = false;
var startX = 0;
var startY = 0;

// Function to handle mouse wheel events
function handleMouseWheel(event) {
    event.preventDefault();

    // Increase or decrease the scale based on the scroll direction
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    scale += delta * 0.1;

    // Restrict the scale within a range (e.g., 0.5 to 3)
    scale = Math.max(0.5, Math.min(scale, 3));

    // Apply the scale transformation to the image
    img.style.transform = 'scale(' + scale + ')';
}

// Function to handle mouse down events
function handleMouseDown(event) {
    event.preventDefault();

    // Check if the click is within the image boundaries
    if (event.target === img) {
        // Update the dragging state and store the initial position
        isDragging = true;
        startX = event.clientX - posX;
        startY = event.clientY - posY;
    }
}


// Function to handle mouse move events
function handleMouseMove(event) {
    event.preventDefault();

    // If dragging, calculate the new position and update the image
    if (isDragging) {
        posX = event.clientX - startX;
        posY = event.clientY - startY;
        img.style.transform = 'scale(' + scale + ') translate(' + posX + 'px, ' + posY + 'px)';
    }
}

// Function to handle mouse up events
function handleMouseUp(event) {
    event.preventDefault();

    // Reset the dragging state
    isDragging = false;
}

// Attach event listeners
container.addEventListener('wheel', handleMouseWheel);
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mousemove', handleMouseMove);
container.addEventListener('mouseup', handleMouseUp);
