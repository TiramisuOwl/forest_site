//script.js

// wind should be on by defualt
var wind = document.getElementById('audio0');
wind.play();
wind.loop = true;

var cicadas = document.getElementById('audio5');
var crickets = document.getElementById('audio6');

var checkboxNightAmbience = document.getElementById('loopCheckboxNight');
checkboxNightAmbience.addEventListener('change', function() {
    if (checkboxNightAmbience.checked) {
        wind.pause();
        wind.loop = false;
        wind.currentTime = 0;
        cicadas.play();
        cicadas.loop = true;
        crickets.play();
        crickets.loop = true;
    } else {
        cicadas.pause();
        cicadas.loop = false;
        cicadas.currentTime = 0;
        crickets.pause();
        crickets.loop = false;
        crickets.currentTime = 0;
        wind.play();
        wind.loop = true;
    }
})

// Helper function to handle looping audio with a checkbox
function checkboxAudio(checkboxId, audioId) {
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

// for checkboxes with an alternate night audio
function checkboxAudioNight(checkboxId, nightCheckbox, audioId1, audioId2) {
    var audioDay = document.getElementById(audioId1);
    var audioNight = document.getElementById(audioId2);
    var checkbox = document.getElementById(checkboxId);
    var nightBox = document.getElementById(nightCheckbox);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // If the checkbox is checked, start the audio and enable looping
            if (nightBox.checked) {
                audioNight.play();
                audioNight.loop = true;
            } else {
                audioDay.play();
                audioDay.loop = true;
            }
        } else {
            // If the checkbox is unchecked, stop the audio and disable looping
            if (nightBox.checked) {
                audioNight.pause(); // pause
                audioNight.loop = false; // disable loop
                audioNight.currentTime = 0; // reset audio to start
            } else {
                audioDay.pause();
                audioDay.loop = false;
                audioDay.currentTime = 0;
            }
        }
    });

    // when switching to day/night, turn off the audio from the opposite time cycle
    nightBox.addEventListener('change', function() {
        if (nightBox.checked) { // currently night, switch off day
            audioDay.pause();
            audioDay.loop = false;
            audioDay.currentTime = 0;
        } else { // currently day, switch off night
            audioNight.pause();
            audioNight.loop = false;
            audioNight.currentTime = 0;
        }
        checkbox.dispatchEvent(new Event('change')); // simulate the checkbox change event, so the proper audio starts
    })
}

// Call the helper function for each audio checkbox
// checkboxAudio('loopCheckbox1', 'audio1'); // Birds
checkboxAudioNight('loopCheckbox1', 'loopCheckboxNight', 'audio1', 'audio1_2');
checkboxAudio('loopCheckbox2', 'audio2'); // Stream
checkboxAudio('loopCheckbox3', 'audio3'); // Frogs
checkboxAudio('loopCheckbox4', 'audio4'); // Trees
