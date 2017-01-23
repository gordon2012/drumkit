function activateDrum(drum) {
    const audio = document.querySelector(`audio[data-key="${drum.dataset.key}"]`);

    drum.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    // console.log(e.target);
    e.target.classList.remove('playing');
}

// Events for each drum
//
const drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
    drum.addEventListener('click', e => { activateDrum(drum); });
    drum.addEventListener('transitionend', removeTransition);
});

// Keyboard Input
//
document.addEventListener('keydown', e => {
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);

    if(!drum) return;
    drum.click();
});
