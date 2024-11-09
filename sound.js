//script.js
// Helper function to handle looping audio with a checkbox
function handleLoopWithCheckbox(checkboxId, audioId) {
    var audio = document.getElementById(audioId); // Get the audio element by ID
    var checkbox = document.getElementById(checkboxId); // Get the checkbox element by ID

    // Add an event listener to handle checkbox change
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // If the checkbox is checked, start the audio and enable looping
            audio.play(); // Play the audio
            audio.loop = true; // Enable looping
        } else {
            // If the checkbox is unchecked, stop the audio and disable looping
            audio.loop = false; // Disable looping
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset the audio to the start
        }
    });
}

// Call the helper function for each audio checkbox
handleLoopWithCheckbox('loopCheckbox1', 'audio1');
handleLoopWithCheckbox('loopCheckbox2', 'audio2');
handleLoopWithCheckbox('loopCheckbox3', 'audio3');
handleLoopWithCheckbox('loopCheckbox4', 'audio4');
