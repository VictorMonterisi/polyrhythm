const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const playSound = (frequency = 220, duration = 2) => {
    const osc = audioCtx.createOscillator()
    const envelope = audioCtx.createGain()
    osc.type = "triangle"
    osc.connect(envelope)
    envelope.connect(audioCtx.destination)

    envelope.gain.setValueAtTime(0, audioCtx.currentTime)
    envelope.gain.linearRampToValueAtTime(0.005, audioCtx.currentTime + 0.005)
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration - 0.01)

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)

    osc.start()
    osc.stop(audioCtx.currentTime + duration)

}