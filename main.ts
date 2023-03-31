let Sensibilidad = 500
let Sensibilidad_negativa = 0 - Sensibilidad
let Tiempo_reaccion = 500
let gato = game.createSprite(2, 2)
let raton = game.createSprite(randint(0, 4), randint(0, 4))
raton.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
game.startCountdown(10000)
basic.forever(function () {
    if (game.isGameOver()) {
        game.gameOver()
    }
    if (gato.isTouching(raton)) {
        game.addScore(1)
    }
    if (input.acceleration(Dimension.X) > Sensibilidad) {
        if (gato.get(LedSpriteProperty.X) < 4) {
            gato.change(LedSpriteProperty.X, 1)
        }
    }
    if (input.acceleration(Dimension.X) < Sensibilidad_negativa) {
        if (gato.get(LedSpriteProperty.X) > 0) {
            gato.change(LedSpriteProperty.X, -1)
        }
    }
    if (input.acceleration(Dimension.Y) > Sensibilidad) {
        if (gato.get(LedSpriteProperty.Y) < 4) {
            gato.change(LedSpriteProperty.Y, 1)
        }
    }
    if (input.acceleration(Dimension.Y) < Sensibilidad_negativa) {
        if (gato.get(LedSpriteProperty.Y) > 0) {
            gato.change(LedSpriteProperty.Y, -1)
        }
    }
    basic.pause(Tiempo_reaccion)
})
