//script.js

const checkboxes = document.querySelectorAll('[data-overlay]');
const overlays = document.querySelectorAll('.overlay');

// Add event listeners to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const overlayId = checkbox.getAttribute('data-overlay');
        const overlay = document.getElementById(overlayId);

        // Toggle overlay visibility based on checkbox state
        if (checkbox.checked) {
            overlay.style.display = 'block'; // Show overlay
        } else {
            overlay.style.display = 'none'; // Hide overlay
        }
    });
});