class Track {
    constructor(center, radius, hue) {
        this.center = center
        this.radius = radius
        this.hue = hue
        this.period = Math.PI
    }

    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
            round: Math.floor(offset / this.period),
            progress: (offset % this.period) / this.period
        }
    }

    draw(ctx) {
        ctx.beginPath()
        for(let i = 0; i < Math.PI * 2; i += 0.1) {
            const pos = this.getPosition(i)
            ctx.lineTo(pos.x, pos.y)
        }
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, 0, size, size)
        gradient.addColorStop(0, `hsl(${this.hue}, 100%, 30%)`)
        gradient.addColorStop(1, `hsl(${this.hue}, 100%, 70%)`)
    
        ctx.strokeStyle = gradient
    
        ctx.shadowBlur = 3;
        ctx.shadowColor = `hsla(${this.hue}, 100%, 50%, 0.5)`
        ctx.stroke()
    }
}