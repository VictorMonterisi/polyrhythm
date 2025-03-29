class Ball {
    constructor(track, radius, speed, soundFrequency, hue) {
        this.track = track
        this.radius = radius
        this.speed = speed
        this.soundFrequency = soundFrequency
        this.hue = hue
        this.offset = 0
        this.round = 0
        this.progress = 0
        this.center = this.track.getPosition(this.offset)
    }

    move() {
        this.offset += this.speed
        const res = this.track.getPosition(this.offset)
        this.center = {x: res.x, y: res.y}
        this.progress = res.progress
        if (res.sound !== this.round) {
            playSound(this.soundFrequency)
            this.round = res.round
        }

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
        
        const lightness = 50 + 20 * Math.sin(this.progress * Math.PI)
        ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`
    
        ctx.shadowBlur = 3
        ctx.shadowColor = `hsl(${this.hue}, 100%, 80%)`
    
        ctx.fill();
        ctx.strokeStyle = `hsl(${this.hue}, 30%, 30%)`
        ctx.lineWidth = 1
        ctx.stroke()
    }
}