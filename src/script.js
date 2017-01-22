// Click event for each drum
//
const drums = document.querySelectorAll('.drum');
drums.forEach(d => {
    d.addEventListener('click', e => {
        const audio = document.querySelector(`audio[data-key="${d.dataset.key}"]`);

        audio.currentTime = 0;
        audio.play();
    });
});

// Keyboard Input
//
document.addEventListener('keydown', e => {
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);

    if(!drum) return;
    drum.click();
});
