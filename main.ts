basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    while (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    while (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
})
