
let audioCtx;

const initializeAudioContext = () => {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

const playSound = (frequency = 440, duration = 1) => {
  // Check if AudioContext is initialized
  if (!audioCtx) {
    console.error("AudioContext not initialized. Call initializeAudioContext() first.");
    return;
  }
  
  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();
  osc.type = "triangle";
  osc.connect(envelope);
  envelope.connect(audioCtx.destination);

  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  envelope.gain.linearRampToValueAtTime(0.005, audioCtx.currentTime + 0.005);
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration - 0.01);

  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}


document.body.addEventListener('click', () => {
  // Initialize AudioContext within user-initiated event
  if (!audioCtx) {
    initializeAudioContext();
  }
  // Now it is safe to play sounds!
  playSound(440, 1);
});