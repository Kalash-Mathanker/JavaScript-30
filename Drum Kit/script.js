function playSound(e){
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.col[data-key="${e.keyCode}"]`);
    // console.log(key);

    if (!audio) return;

    audio.currentTime = 0;  // rewind to start  
    audio.play(); 

    key.classList.add('playing');
}

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return;   // if not a transform then return

    // console.log(e.propertyName);

    // console.log(this);

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.col');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));  // loop to each key and listen to their transition end event

window.addEventListener('keydown', playSound);


