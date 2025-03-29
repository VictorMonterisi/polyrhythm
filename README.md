# Polyrhythm

This project creates a mesmerizing visualization of moving balls on concentric tracks, each representing a different rhythmic cycle, and plays corresponding tones to create an auditory polyrhythm effect.

## What is a Polyrhythm?
A polyrhythm occurs when two or more rhythms are played together, each with a different beat cycle. This creates a complex and interesting musical feature. The idea behind this project is to visualize and sonify polyrhythms dynamically using JavaScript, HTML5 Canvas, and the Web Audio API.

## How It Works
### Visual Representation
- The interface consists of a canvas where multiple circular tracks are drawn.
- Each track represents a rhythmic cycle with a specific hue in the HSL color space.
- Small balls move along these tracks, each representing a beat in the polyrhythm.
- As a ball completes a cycle, it triggers a sound to mark the beat.

### Audio Representation
- When a ball completes a cycle, it plays a note using the Web Audio API.
- Each track has a unique frequency, generating a melodic sequence.
- The sound synthesis is done using oscillators with triangular waveforms.
- A smooth gain envelope prevents clicking noises when the sound plays.

## Technologies Used
- **HTML5 Canvas**: For rendering the visual elements (tracks and balls).
- **CSS**: For styling and background gradients.
- **JavaScript (ES6)**: For handling the physics, animations, and logic.
- **Web Audio API**: For generating sound dynamically based on rhythmic patterns.

## File Structure
```
polyrhythm/
│── index.html      # Main HTML file
│── css/
│   └── style.css   # Stylesheet
│── js/
│   ├── sound.js    # Handles audio playback
│   ├── track.js    # Defines the Track class
│   └── ball.js     # Defines the Ball class
│── img/
│   └── favicon.png # Icon for the page
```