// Get the main image element and all the checkboxes
const forestImage = document.getElementById('forestImage');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Function to update the image based on the selected checkboxes
function updateImage() {
  // Start with the default forest background image
  let newImageSrc = "dayBack.jpeg";

  // Loop through all checkboxes and check if they are checked
  checkboxes.forEach(function(checkbox) {
    const overlayId = checkbox.getAttribute('data-overlay');
    const overlayImage = document.getElementById(overlayId);

    // If the checkbox is checked, add the overlay to the new image source
    if (checkbox.checked) {
      overlayImage.style.display = 'block';  // Show the overlay image
      newImageSrc = overlayImage.src; // Change the forest background to the selected overlay
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
