// Get the main image element and all the checkboxes
const forestImage = document.getElementById('forestImage');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Function to update the image based on the selected checkboxes
function updateImage() {
  // Start with the default forest background image
  let newImageSrc = "dayBack.jpeg";  // Default image

  // Loop through all checkboxes and check if they are checked
  checkboxes.forEach(function(checkbox) {
    const overlayId = checkbox.getAttribute('data-overlay');
    const overlayImage = document.getElementById(overlayId);

    // If the checkbox is checked, show the overlay image
    if (checkbox.checked) {
      overlayImage.style.display = 'block';  // Show the overlay image
      // If needed, update the main image (logic can vary based on overlay choices)
      // Example: You can decide to update the main image based on the overlays
      newImageSrc = overlayImage.src;  // Replace this with your logic for combining images
    } else {
      overlayImage.style.display = 'none';  // Hide the overlay image if unchecked
    }
  });

  // Update the forest image with the new source
  forestImage.src = newImageSrc;
}

// Add event listeners to the checkboxes to update the image when checked/unchecked
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', updateImage);
});

// Initialize the image on page load
updateImage();

