import './style.css'
//importar tone
import * as Tone from "tone";

//crea sintetizador
const synth = new Tone.Synth().toDestination();

//array con todas las teclas
let keys = document.querySelectorAll('.key')

for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote())
    addEventListener('mouseleave', () => stopNote())
}

function playNote(note) {

    synth.triggerAttackRelease(note);

}

function stopNote() {
    synth.triggerRelease();

}

