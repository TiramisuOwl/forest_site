//script.js

//Get references to all audio elements and checkboxes
const audioElements = [
    document.getElementById('birds'),
    document.getElementById('trees'),
    document.getElementById('stream'),
    document.getElementById('frog'),
];
const checkboxes = document.querySelectorAll('[data-track]');

//Play selected audio tracks + wimd
document.getElementById('play-selected').addEventListener('click', () => {
    if (wind.paused) {
        wind.play();
    }

    //Play selected
    audioElements.forEach((audio, index) => {
        if (checkboxes[index].checked) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

document.getElementById('stop-all').addEventListener('click', ()  => {
    wind.pause();
    wind.currentTime = 0;

    //Stop selected
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    checkboxes.forEach(checkbox => checkbox.checked = false);
});
