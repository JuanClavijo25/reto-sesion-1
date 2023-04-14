basic.showLeds(`
    # # # # .
    . . . # .
    . . . # .
    # . . # .
    . # # . .
    `)
basic.clearScreen()
basic.pause(100)
basic.showLeds(`
    # # # # .
    . . . # .
    . . . # .
    # . . # .
    . # # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.clearScreen()
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . # # #
    # # . . #
    # # # # #
    # . # # #
    `)
basic.showLeds(`
    . # # . #
    # . # # #
    # # . . #
    . . # # .
    # . # . .
    `)
basic.showLeds(`
    . # . . #
    # . . . .
    . . . . #
    . . # . .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
})
