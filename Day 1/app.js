window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; //stops function from running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play();
})
