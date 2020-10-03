input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.soundLevel())
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
})
