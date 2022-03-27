const WHITE_KEYS = ['a', 's', 'd', 'j', 'k', 'l', ';'];
const BLACK_KEYS = ['w', 'e', 'i', 'o', 'p']

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
// .key.black allow for both classes in the same css file to be selected simultaneously.

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
    // activates function listed below regarding function playNote
})

document.addEventListener('keydown', e => {
    // if (e.repeat) return detects if the keydown event is being initiated by the key being held down. If it does, it stops the sounds from continuing.
    if (e.repeat) return;
    // key is being established as a new function.
    const key = e.key;
    // WHITE_KEY refers to the array. indexOF key is referring to the class of the object slected.
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    // refer to note of what whiteKeyIndex means
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);

})

function playNote(key) {
    const noteAudio=document.getElementById(key.dataset.note);
    // why ID? Notes have ID assigned. Class Names will not work.
    // instant feedback.
    noteAudio.currentTime = 0;
    noteAudio.play();
    // plays the note. Finds the key class being interacted with and then obtains its dataset. .note refers to the type of dataset being looked for. Theoretically we could also have another data-'type' that was an animal. data-bird="owl". In short. find class and the dataset."type".
    key.classList.add('active');
    // this is how you add a class through standard javascript. Key refers to class being selected. 
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

