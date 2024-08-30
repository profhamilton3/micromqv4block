def on_in_background():
    while True:
        if 10 > maqueen.ultrasonic(PingUnit.CENTIMETERS):
            music.play(music.string_playable("C5 B A G F E D C ", 300),
                music.PlaybackMode.UNTIL_DONE)
        else:
            basic.pause(100)
control.in_background(on_in_background)
