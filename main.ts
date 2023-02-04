input.onButtonPressed(Button.A, function () {
    radio.sendString("help")
    basic.showString("help")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    יריות += 1
})
let רוחות = 0
let יריות = 0
basic.showString("ghost busters")
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(233, music.beat(BeatFraction.Half))
basic.pause(1000)
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(262, music.beat(BeatFraction.Quarter))
music.playTone(233, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("shake me")
basic.forever(function () {
    radio.setGroup(71)
    if (input.lightLevel() < 35) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (יריות == 3) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.No)
                music.playTone(262, music.beat(BeatFraction.Whole))
                basic.pause(100)
            }
            רוחות += 1
            יריות = 0
        }
    }
    if (רוחות == 3) {
        basic.showString("well done!")
    }
})
