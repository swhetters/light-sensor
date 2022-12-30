let lightVal = 0
let playingMusic = 0
music.onEvent(MusicEvent.MelodyEnded, function () {
    playingMusic = 0
})
playingMusic = 0
basic.forever(function () {
    lightVal = pins.analogReadPin(AnalogPin.P1)
    if (lightVal < 600 && playingMusic == 0) {
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        playingMusic = 1
    }
    basic.showNumber(lightVal)
})