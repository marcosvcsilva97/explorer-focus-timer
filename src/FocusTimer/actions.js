import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function running() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}


export function add() {
    timer.incrementTimer();
    sounds.buttonPressAudio.play();
}

export function remove() {
    timer.decrementTimer();
    sounds.buttonPressAudio.play();
}

/*  Sounds Controls */

export function tree() {
    elements.tree.classList.toggle('active');
    sounds.tree.play();
    
    if (!elements.tree.classList.contains('active')) {
        sounds.tree.pause();
    }
}

export function rain() {
    elements.rain.classList.toggle('active');
    sounds.rain.play();

    if (!elements.rain.classList.contains('active')) {
        sounds.rain.pause();
    }
}

export function storeFront() {
    elements.storeFront.classList.toggle('active');
    sounds.storeFront.play();

    if (!elements.storeFront.classList.contains('active')) {
        sounds.storeFront.pause();
    }
}

export function flame() {
    elements.flame.classList.toggle('active');
    sounds.flame.play();

    if (!elements.flame.classList.contains('active')) {
        sounds.flame.pause();
    }
}
