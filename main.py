def do_drive_forward(num: number, num2: number):
    music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
        music.PlaybackMode.IN_BACKGROUND)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, num)
    basic.pause(num2)
    maqueen.motor_stop(maqueen.Motors.ALL)

def on_logo_pressed():
    do_drive_forward(125, 1000)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_in_background():
    while True:
        if 10 > maqueen.ultrasonic(PingUnit.CENTIMETERS):
            music.play(music.string_playable("C5 B A G F E D C ", 300),
                music.PlaybackMode.UNTIL_DONE)
        else:
            basic.pause(100)
control.in_background(on_in_background)
