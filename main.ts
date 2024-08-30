function do_drive_backward (num: number, num2: number) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, num)
    basic.pause(num2)
    maqueen.motorStop(maqueen.Motors.All)
}
function do_drive_forward (num: number, num2: number) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, num)
    basic.pause(num2)
    maqueen.motorStop(maqueen.Motors.All)
}
function do_spin_left (num: number, num2: number) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, num)
    basic.pause(num2)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    do_drive_forward(125, 1500)
    do_spin_left(75, 1500)
    do_drive_backward(100, 1500)
    do_spin_right(75, 1500)
    do_drive_forward(50, 500)
})
function do_spin_right (num: number, num2: number) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, num)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, num)
    basic.pause(num2)
    maqueen.motorStop(maqueen.Motors.All)
}
control.inBackground(function () {
    basic.showIcon(IconNames.Skull)
    while (true) {
        if (10 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
            music.play(music.stringPlayable("C5 B A G F E D C ", 300), music.PlaybackMode.UntilDone)
            do_drive_backward(100, 1500)
            do_spin_right(75, 1500)
        } else {
            basic.pause(100)
        }
    }
})
