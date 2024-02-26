enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        led.toggle(0, 0)
        led.plot(2, 2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(200)
    } else if (receivedNumber == 1) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(200)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (led.point(0, 0) && led.point(1, 2)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
})
basic.forever(function () {
	
})
