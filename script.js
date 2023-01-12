// Creating Counter
let counter = document.getElementById("counter")
let score = 0

// Creating Canvas
let app = new PIXI.Application(
    {
        width: screen.width,
        height: screen.height,
        backgroundAlpha: 0
    }
)
document.body.appendChild(app.view)

// Creating Ball
let ball = PIXI.Sprite.from('ball.png')
app.stage.addChild(ball)

// Setting Ball Size
ball.width = 100
ball.height = 100

// Ball Position
ball.anchor.set(0.5)
ball.x = app.screen.width / 2
ball.y = 500

// Makes the Ball interactive
ball.interactive = true
ball.cursor = 'pointer'
ball.on('pointerdown', onClick)

// Color Array
let colors = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#0000ff'
]
// Makes the Ball Move
app.ticker.add(() => {
    ball.y -= 5
    ball.angle += 2

    if (ball.y < 100) {
        ball.y = 100
        app.ticker.add(() => {
            ball.y += 10
        })
    }
    if (ball.y >= app.screen.height) {
        counter.textContent = 0
        score = 0
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        ball.y = 100
    }
})

function onClick() {
    // Counts score
    score += 1
    counter.textContent = score

    app.ticker.add(() => {
        ball.y -= 10
    })
}
