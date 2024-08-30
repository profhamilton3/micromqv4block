control.inBackground(function () {
    while (true) {
        if (10 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 300), music.PlaybackMode.UntilDone)
        } else {
            basic.pause(100)
        }
    }
})
