input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.soundLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x00ff00)
})
basic.forever(function () {
    if (input.soundLevel() > 20) {
        basic.setLedColor(0xff0000)
    } else {
        basic.turnRgbLedOff()
    }
    led.plotBarGraph(
    input.soundLevel(),
    100
    )
    basic.pause(5000)
})
