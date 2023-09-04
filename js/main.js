function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    key.classList.add('playingSound')
    audio.play()

    setTimeout(() => {
        key.classList.remove('playingSound');
    }, 1000)
}



window.addEventListener('keydown', playSound);