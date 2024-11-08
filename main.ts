/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Nov 2024
 * This program will draw a perimeter both clockwise using a nest loop
*/

//variables
let loopNumberX = 0
let loopNumberY = 0
let sprite: game.LedSprite = null

//setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Happy)

//loop a
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    loopNumberX = 0
    while (loopNumberX <= 3) {
        loopNumberY = 0
        while (loopNumberY <= 3) { 
            sprite.move(1)
            basic.pause(300)
            loopNumberY++
        }
        loopNumberX++
        sprite.turn(Direction.Right, 90)
    }
sprite.delete()
basic.showIcon(IconNames.Happy)
})