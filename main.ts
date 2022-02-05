let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(0, 20)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
